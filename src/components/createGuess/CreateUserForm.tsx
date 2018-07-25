import * as React from 'react';
import { Formik, Form, FieldProps, FormikProps, Field } from 'formik';
import { Input, FixedSpan, labelContainerStyles } from 'src/assets/styles';
// import { Link } from 'react-router-dom';
import Button from '../Button';
interface IFormValues {
  email?: string,
  name?: string,
}

interface ICreateUserFormProps {
  handleSubmit: (variables: object) => void,
  data?: any,
  loading?: boolean,
  error?: any,
}


const CreateUserForm: React.SFC<ICreateUserFormProps> = ({ handleSubmit, data, error, loading }) => {

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
      onSubmit={(values: IFormValues) => handleSubmit(values)}
      render={({ errors, values }: FormikProps<IFormValues>) => (
        <Form>
          <Field
            name="name"
            render={({ field, form }: FieldProps<IFormValues>) => (
              <div className={labelContainerStyles}>
                <h2>Naam</h2>
                <p>Gewoon, uw naam. Weet je die nog?</p>
                <Input type="text" {...field} placeholder="name" error={form.errors.name} />
                <FixedSpan>
                  {form.touched.name &&
                    form.errors.name &&
                    form.errors.name}
                </FixedSpan>
              </div>
            )}
          />
          <Field
            name="email"
            render={({ field, form }: FieldProps<IFormValues>) => (
              <div className={labelContainerStyles}>
                <h2>Email</h2>
                <p>Wij zijn 100% GDPR compliant! haha, mopje.</p>
                <Input type="text" {...field} placeholder="email" error={form.errors.email} />
                <FixedSpan>
                  {form.touched.email &&
                    form.errors.email &&
                    form.errors.email}
                </FixedSpan>
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