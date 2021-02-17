import React, { FC, useState, useEffect } from 'react';
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

import firebase, { db } from '../../firebase';

type LocationState = {
  selectedTastingSheet: TastingSheetDoc;
  newWineType: WineType;
};

const EnhancedTastingSheet: FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const [wineType, setWineType] = useState<WineType>('red');
  const [appearance, setAppearance] = useState<SubCategoryItems>(
    RED_APPEARANCE_DEFAULT,
  );
  const [nose, setNose] = useState<SubCategoryItems>(RED_NOSE_DEFAULT);
  const [palate, setPalate] = useState<SubCategoryItems>(RED_PALATE_DEFAULT);
  const [conclusion, setConclusion] = useState<SubCategoryItems>(
    RED_CONCLUSION_DEFAULT,
  );

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
      setWineType(location.state.selectedTastingSheet.wineType);
      setAppearance(location.state.selectedTastingSheet.appearance);
      setNose(location.state.selectedTastingSheet.nose);
      setPalate(location.state.selectedTastingSheet.palate);
      setConclusion(location.state.selectedTastingSheet.conclusion);
    }
  }, [location]);

  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (
    attributes: SubCategoryItems,
    categoryTitle: CategoryTitles,
  ) => {
    if (categoryTitle === '外観') setAppearance(attributes);
    if (categoryTitle === '香り') setNose(attributes);
    if (categoryTitle === '味わい') setPalate(attributes);
    if (categoryTitle === '総合評価') setConclusion(attributes);
  };

  const handleSubmit = () => {
    const tastingSheet = {
      wineType,
      appearance: { ...appearance },
      nose: { ...nose },
      palate: { ...palate },
      conclusion: { ...conclusion },
      createdAt: firebase.firestore.Timestamp.now(),
    };

    setLoading(true);

    db.collection('tastingSheets')
      .add({ ...tastingSheet })
      .then(() => {
        setLoading(false);
        history.push('/');
      })
      .catch((error) => {
        // Todo: Replace console when Message is ready
        // eslint-disable-next-line no-console
        console.error('Error adding document: ', error);
        setLoading(false);
      });
  };

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
