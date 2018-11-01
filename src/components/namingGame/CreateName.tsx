import * as React from 'react';
import { Formik, Form, FieldProps, FormikProps, Field } from 'formik';
import { BigInput, FixedSpan, labelContainerStyles } from 'src/assets/styles';
import Button from '../Button';
import { css } from 'emotion';
import NamesList from './NamesList';
interface IFormValues {
  name?: string,
}

interface ICreateUserFormProps {
  createName: (IFormValues) => void,
  data?: any,
  loading?: boolean,
  error?: any,
}


const CreateName: React.SFC<ICreateUserFormProps> = ({ createName, data, error, loading }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validate={
        values => {
          const errors: IFormValues = {};
          if (!values.name)
            errors.name = 'Vul eerst een naam in!';
          else if (values.name.length < 2) errors.name = 'Die naam is een beetje kort, nee?';
          else if (values.name.length > 20) errors.name = 'Dat is geen naam, dat is een volzin!';
          return errors;
        }
      }
      onSubmit={(values: IFormValues) => createName({ variables: { name: values.name } })}
      render={({ errors, values }: FormikProps<IFormValues>) => (
        [<Form className={css`
          display: flex;
          flex-flow: column;
        `} key={1}>
          <Field
            name="name"
            render={({ field, form }: FieldProps<IFormValues>) => (
              <div className={labelContainerStyles}>
                <h2>Naam toevoegen</h2>
                <p>Vul een naam in die je leuk vindt.</p>
                <BigInput type="text" {...field} autoFocus={true} error={form.errors.name} />
                <FixedSpan>
                  {form.touched.name &&
                    form.errors.name &&
                    form.errors.name}
                </FixedSpan>
              </div>
            )}
          />
          <div>{error ? error.message === "GraphQL error: A unique constraint would be violated on Name. Details: Field name = name" ? "Deze naam is al toegevoegd aan de lijst!" : error.message : ''}</div>
          <Button
            text='Toevoegen'
            loading={loading ? true : false}
            disabled={errors.name || !values.name}
          />
        </Form>,
        <NamesList key={2} />]
      )}
    />
  );
};

export default CreateName;