import * as React from 'react';
import { Formik, Form, FieldProps, FormikProps, Field } from 'formik';
import SexToggle from './SexToggle';
import styled, { css } from 'react-emotion';
import Button from '../Button';

const labelContainerStyles = css`
  position: relative;
  display: flex;
  flex-flow: column;
  margin-bottom: 50px;
`;

const FixedSpan = styled('span')`
  position: relative;
  min-height: 20px;
  color: #F160AD;
`;


const Input = styled('input')(`
background: white;
min-height: 42px;
width: 126px;
text-align: center;
max-width: 400px;
border: 2px solid #67D0DC;
border-radius: 21px;
padding: 0 21px;
margin: 10px auto;
width: 100%;
justify-self: center;
`, ({ error }: { error?: boolean }) => ({
    border: `2px solid ${error ? '#F160AD' : '#67D0DC'}`,
  }))
  ;


interface IFormValues {
  weight: number,
  sex?: "m" | "f",
  birthDate?: Date
}

interface ICreateUserFormProps {
  createGuess: (variables: object) => void,
  data?: any,
  loading?: boolean,
  error?: any,
}


const CreateUserForm: React.SFC<ICreateUserFormProps> = ({ createGuess, data, error, loading }) => {
  return (
    <Formik
      initialValues={{
        birthDate: new Date(),
        weight: 2500,
      }}
      validate={
        values => {
          const errors: { birthDate?: string, weight?: string } = {};
          if (!values.birthDate)
            errors.birthDate = 'Hey! Je vergat iets';
          if (values && values.weight > 5000)
            errors.weight = 'Dat krijgt Roxanne er nooit uitgeperst';
          if (values.weight < 200)
            errors.weight = 'Dit is niet levensvatbaar';
          // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
          //   errors.email = 'Dit lijkt niet op een email adres ;)';
          // ;

          // if (!values.name)
          //   errors.name = 'Heb jij geen naam misschien?';

          return errors;
        }
      }
      onSubmit={(values: IFormValues) => createGuess({ variables: values })}
      render={({ errors, values }: FormikProps<IFormValues>) => (
        <Form>
          <h2>Geslacht</h2>
          <p>Jij weet het geslacht natuurlijk al heel zeker ….</p>
          <div className={labelContainerStyles}>
            <Field
              name="sex"
              component={SexToggle}
            />
          </div>
          <h2>Datum</h2>
          <p>En de geboortedatumdatum is ook een makkie! (Oh ja, Rox is uitgerekend op 19/01/2019)</p>
          <Field
            name="birthDate"
            render={({ field, form }: FieldProps<IFormValues>) => (
              <div className={labelContainerStyles}>
                <Input type="date" {...field} placeholder="geboortedatum" error={form.errors.birthDate} />
                <FixedSpan>{form.touched.birthDate &&
                  form.errors.birthDate &&
                  form.errors.birthDate}
                </FixedSpan>
              </div>
            )}
          />
          <h2>Gewicht</h2>
          <p>Voor de die hards … (geboortegewicht in gram)</p>
          <Field
            name="weight"
            render={({ field, form }: FieldProps<IFormValues>) => (
              <div className={labelContainerStyles}>
                <Input
                  type="number" {...field}
                  step='50'
                  placeholder="gewicht (in gram)"
                  error={form.errors.weight}
                />
                <FixedSpan>
                  {form.touched.weight &&
                    form.errors.weight &&
                    form.errors.weight}
                </FixedSpan>
              </div>
            )}
          />

          <div>{error && error.message}</div>
          <Button
            text='volgende'
            loading={loading ? true : false}
            disabled={
              errors.birthDate ||
              !values.birthDate
            }
          />
        </Form>
      )}
    />
  );
};

export default CreateUserForm;