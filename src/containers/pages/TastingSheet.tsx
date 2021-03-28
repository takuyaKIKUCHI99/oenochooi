import React, { FC, useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import TastingSheet from 'components/pages/TastingSheet';
import { TastingSheetDoc } from 'components/organisms/ListItem';

import { WineType, CategoryTitles, SubCategoryItems } from 'data/tastingSheet';
import {
  RED_APPEARANCE_DEFAULT,
  RED_NOSE_DEFAULT,
  RED_PALATE_DEFAULT,
  RED_CONCLUSION_DEFAULT,
} from 'data/redWine';
import {
  WHITE_APPEARANCE_DEFAULT,
  WHITE_NOSE_DEFAULT,
  WHITE_PALATE_DEFAULT,
  WHITE_CONCLUSION_DEFAULT,
} from 'data/whiteWine';

import firestoreDataManipulation from 'utils/functions/firestoreDataManipulation';
import { FirebaseContext } from 'contexts';

import paths from 'paths';

type LocationState = {
  selectedTastingSheet: TastingSheetDoc;
  newWineType: WineType;
};

const EnhancedTastingSheet: FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { db } = useContext(FirebaseContext);

  const [loading, setLoading] = useState(false);

  const [id, setId] = useState<string>();
  const [wineType, setWineType] = useState<WineType>('red');
  const [appearance, setAppearance] = useState<SubCategoryItems>();
  const [nose, setNose] = useState<SubCategoryItems>();
  const [palate, setPalate] = useState<SubCategoryItems>();
  const [conclusion, setConclusion] = useState<SubCategoryItems>();
  const [title, setTitle] = useState<string>('');

  // Set TastingSheet value
  useEffect(() => {
    if (location.state.newWineType) {
      setWineType(location.state.newWineType);
      if (location.state.newWineType === 'red') {
        setAppearance(RED_APPEARANCE_DEFAULT);
        setNose(RED_NOSE_DEFAULT);
        setPalate(RED_PALATE_DEFAULT);
        setConclusion(RED_CONCLUSION_DEFAULT);
      } else {
        setAppearance(WHITE_APPEARANCE_DEFAULT);
        setNose(WHITE_NOSE_DEFAULT);
        setPalate(WHITE_PALATE_DEFAULT);
        setConclusion(WHITE_CONCLUSION_DEFAULT);
      }
    }

    if (location.state.selectedTastingSheet) {
      setId(location.state.selectedTastingSheet.id);
      setWineType(location.state.selectedTastingSheet.wineType);
      setAppearance(location.state.selectedTastingSheet.appearance);
      setNose(location.state.selectedTastingSheet.nose);
      setPalate(location.state.selectedTastingSheet.palate);
      setConclusion(location.state.selectedTastingSheet.conclusion);
      setTitle(location.state.selectedTastingSheet.title);
    }
  }, [location]);

  const handleCategoryChange = (
    attributes: SubCategoryItems,
    categoryTitle: CategoryTitles,
  ) => {
    if (categoryTitle === '外観') setAppearance(attributes);
    if (categoryTitle === '香り') setNose(attributes);
    if (categoryTitle === '味わい') setPalate(attributes);
    if (categoryTitle === '総合評価') setConclusion(attributes);
  };

  const handleSubmit = async () => {
    const tastingSheetArgs = {
      wineType,
      appearance: { ...appearance },
      nose: { ...nose },
      palate: { ...palate },
      conclusion: { ...conclusion },
      title,
    };
    const type = id ? 'update' : 'create';

    setLoading(true);

    await firestoreDataManipulation(db, type, id, tastingSheetArgs);

    setLoading(false);
    history.push(paths.list);
  };

  if (!wineType || !appearance || !nose || !palate || !conclusion) return null;

  return (
    <TastingSheet
      wineType={wineType}
      appearance={appearance}
      nose={nose}
      palate={palate}
      conclusion={conclusion}
      loading={loading}
      handleCategoryChange={handleCategoryChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EnhancedTastingSheet;
