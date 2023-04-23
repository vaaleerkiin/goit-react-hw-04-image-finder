import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Input, Submit, Wrap, FormWrap } from './Search.styled';
import { toast } from 'react-toastify';

const schema = object({
  title: string().required(() => {
    toast.error('Fill in the fields', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }),
});
export const Search = () => {
  return (
    <Wrap>
      <Formik
        validationSchema={schema}
        initialValues={{ title: '' }}
        onSubmit={(value, { resetForm }) => {
          console.log(value);
          resetForm();
        }}
      >
        <FormWrap>
          <Field name="title" component={Input} />

          <Submit type="submit" variant="contained">
            Search
          </Submit>
        </FormWrap>
      </Formik>
    </Wrap>
  );
};
