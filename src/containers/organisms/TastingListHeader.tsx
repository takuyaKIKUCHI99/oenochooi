import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import TastingSheetHeader from 'components/organisms/TastingListHeader';

const EnhancedTastingListHeader: FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/tastingSheet');
  };

  return <TastingSheetHeader handleClick={handleClick} />;
};

export default EnhancedTastingListHeader;
