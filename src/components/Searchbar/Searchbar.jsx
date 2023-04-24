import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Input, Submit, Wrap, FormWrap } from './Searchbar.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const schema = object({
  query: string().required('Fill in the fields').trim(),
});
export const Searchbar = ({ onSubmit }) => {
  return (
    <Wrap>
      <Formik
        validationSchema={schema}
        initialValues={{ query: '' }}
        onSubmit={(value, { resetForm }) => {
          onSubmit(value);
          resetForm();
        }}
      >
        <FormWrap>
          <Field name="query" component={Input} />
          <ErrorMessage name="query">
            {msg => {
              toast.error(msg, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              });
            }}
          </ErrorMessage>
          <Submit type="submit" variant="contained">
            Search
          </Submit>
        </FormWrap>
      </Formik>
    </Wrap>
  );
};
Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
