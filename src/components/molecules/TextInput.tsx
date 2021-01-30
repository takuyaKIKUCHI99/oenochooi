import React, { FC, ChangeEvent } from 'react';
import { Form } from 'semantic-ui-react';

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
};

const TextInput: FC<Props> = ({ label, value, handleChange }) => (
  <Form.Field>
    <label htmlFor={label}>
      {label}
      <input id={label} value={value} onChange={handleChange} />
    </label>
  </Form.Field>
);

export default TextInput;
