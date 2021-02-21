import React, { FC } from 'react';
import { Loader } from 'semantic-ui-react';

const Spinner: FC = () => <Loader active inline="centered" content="Loading" />;

export default Spinner;
