import React, { FC } from 'react';
import TastingSheet from 'containers/pages/TastingSheet';

const App: FC = () => {
  return (
    <div className="App">
      <TastingSheet wineType="red" />
    </div>
  );
};

export default App;
