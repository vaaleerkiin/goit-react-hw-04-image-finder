import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Input, Submit, Wrap, FormWrap } from './Search.styled';
import { toast } from 'react-toastify';

const schema = object({ title: string().required('Fill in the fields') });
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
          <ErrorMessage
            name="title"
            render={msg => {
              toast.error(msg, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              });
            }}
          />

          <Submit type="submit" variant="contained">
            Search
          </Submit>
        </FormWrap>
      </Formik>
    </Wrap>
  );
};
