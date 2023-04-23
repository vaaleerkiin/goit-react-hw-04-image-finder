import { TextField, Button, Container } from '@mui/material';
import { Form } from 'formik';
import styled from '@emotion/styled';
export const Input = ({ field, form: { touched, errors }, ...props }) => (
  <TextField
    label="Search"
    variant="outlined"
    {...field}
    {...props}
  ></TextField>
);

export const Submit = styled(Button)`
  height: 56px;
`;

export const FormWrap = styled(Form)`
  height: 56px;
  display: flex;
  gap: 16px;
`;

export const Wrap = styled(Container)`
  width: 100%;
  height: 80px;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #42a5f5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
