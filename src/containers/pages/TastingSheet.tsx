import React, { FC, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Categories } from 'components/organisms/TastingCategory';
import TastingSheet from 'components/pages/TastingSheet';
import { TastingSheetDoc } from 'components/organisms/ListItem';

import {
  appearanceDefault,
  conclusionDefault,
  nodeDefault,
  palateDefault,
  CategoryItems,
  WineType,
} from 'data/tastingCategories';
import firebase, { db } from '../../firebase';

const EnhancedTastingSheet: FC = () => {
  const history = useHistory();
  const location = useLocation<TastingSheetDoc>();

  const [wineType, setWineType] = useState<WineType>('red');
  const [appearance, setAppearance] = useState<CategoryItems>(
    appearanceDefault,
  );
  const [nose, setNose] = useState<CategoryItems>(nodeDefault);
  const [palate, setPalate] = useState<CategoryItems>(palateDefault);
  const [conclusion, setConclusion] = useState<CategoryItems>(
    conclusionDefault,
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
    attributes: CategoryItems,
    title: Categories,
  ) => {
    if (title === '外観') setAppearance(attributes);
    if (title === '香り') setNose(attributes);
    if (title === '味わい') setPalate(attributes);
    if (title === '総合評価') setConclusion(attributes);
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
      .add({ tastingSheet })
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
      appearance={appearance}
      conclusion={conclusion}
      nose={nose}
      palate={palate}
      wineType={wineType}
      loading={loading}
      handleCategoryChange={handleCategoryChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EnhancedTastingSheet;
