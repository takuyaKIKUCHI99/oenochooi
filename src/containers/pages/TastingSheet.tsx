import React, { FC, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import TastingSheet from 'components/pages/TastingSheet';
import { TastingSheetDoc } from 'components/organisms/ListItem';

import {
  APPEARANCE_DEFAULT,
  NOSE_DEFAULT,
  PALATE_DEFAULT,
  CONCLUSION_DEFAULT,
  WineType,
  CategoryTitles,
  SubCategoryItems,
} from 'data/tastingCategories';

import firebase, { db } from '../../firebase';

const EnhancedTastingSheet: FC = () => {
  const history = useHistory();
  const location = useLocation<TastingSheetDoc>();

  const [wineType, setWineType] = useState<WineType>('red');
  const [appearance, setAppearance] = useState<SubCategoryItems>(
    APPEARANCE_DEFAULT,
  );
  const [nose, setNose] = useState<SubCategoryItems>(NOSE_DEFAULT);
  const [palate, setPalate] = useState<SubCategoryItems>(PALATE_DEFAULT);
  const [conclusion, setConclusion] = useState<SubCategoryItems>(
    CONCLUSION_DEFAULT,
  );

  useEffect(() => {
    if (location.state) {
      setWineType(location.state.wineType);
      setAppearance(location.state.appearance);
      setNose(location.state.nose);
      setPalate(location.state.palate);
      setConclusion(location.state.conclusion);
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
