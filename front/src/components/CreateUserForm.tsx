import * as React from 'react';
import { Formik, Form, FieldProps, FormikProps, Field } from 'formik';
// import { Link } from 'react-router-dom';
import Button from './Button';
interface IFormValues {
  email?: string,
  name?: string,
}

interface ICreateUserFormProps {
  createUser: (variables: object) => void,
  data?: any,
  loading?: boolean,
  error?: any,
}


const CreateUserForm: React.SFC<ICreateUserFormProps> = ({ createUser, data, error, loading }) => {

  console.log(data, error, loading)
  // if (error) console.log(error.message)
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
      }}
      validate={
        values => {
          const errors: IFormValues = {};
          if (!values.email)
            errors.email = 'Een emailadres is verplicht';
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
            errors.email = 'Dit lijkt niet op een email adres ;)';
          ;

          if (!values.name)
            errors.name = 'Heb jij geen naam misschien?';

          return errors;
        }
      }
      onSubmit={(values: IFormValues) => createUser({ variables: values })}
      render={({ errors, values }: FormikProps<IFormValues>) => (
        <Form>
          {console.log(errors)}
          <Field
            name="name"
            render={({ field, form }: FieldProps<IFormValues>) => (
              <div>
                <input type="text" {...field} placeholder="name" />
                {form.touched.name &&
                  form.errors.name &&
                  form.errors.name}
              </div>
            )}
          />
          <Field
            name="email"
            render={({ field, form }: FieldProps<IFormValues>) => (
              <div>
                <input type="text" {...field} placeholder="email" />
                {form.touched.email &&
                  form.errors.email &&
                  form.errors.email}
              </div>
            )}
          />
          <div>{error && error.message}</div>
          <Button
            text='volgende'
            loading={loading ? true : false}
            disabled={
              errors.email || errors.name ||
              !values.name || !values.email
            }
          />
        </Form>
      )}
    />
  );
};

export default CreateUserForm;