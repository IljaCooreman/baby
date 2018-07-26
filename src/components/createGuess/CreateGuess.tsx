import * as React from 'react';
import { Formik, Form, FieldProps, FormikProps, Field } from 'formik';
import SexToggle from './SexToggle';
import Button from '../Button';
import { Input, FixedSpan, labelContainerStyles } from 'src/assets/styles';
import * as moment from 'moment';
import { css } from 'emotion';


export interface IFormValues {
  weight: number,
  sex?: string,
  birthDate: string,
}

interface ICreateGuessProps {
  handleSubmitClick: (variables: object) => void,
  data?: any,
  loading?: boolean,
  error?: any,
}


const CreateGuess: React.SFC<ICreateGuessProps> = ({ handleSubmitClick, error, loading }) => {
  return (
    <Formik
      initialValues={{
        birthDate: moment('17/01/2019', 'DD/MM/YYYY').format('YYYY-MM-DD'),
        sex: '',
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

          // if (!values.sex)
          //   errors.sex = 'Kies een geslacht';
          // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
          //   errors.email = 'Dit lijkt niet op een email adres ;)';
          // ;

          // if (!values.name)
          //   errors.name = 'Heb jij geen naam misschien?';

          return errors;
        }
      }
      onSubmit={(values: IFormValues) => handleSubmitClick({ variables: values })}
      render={({ errors, values }: FormikProps<IFormValues>) => (
        <Form className={css`
          display: flex;
          flex-flow: column;
        `}>
          <h2>Geslacht</h2>
          <p>Jij weet het geslacht natuurlijk al heel zeker ….</p>
          <div className={labelContainerStyles}>
            <Field
              name="sex"
              component={SexToggle}
            />
          </div>
          <h2>Datum</h2>
          <p>En de geboortedatum is ook een makkie! (Oh ja, Rox is uitgerekend op 19/01/2019)</p>
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
          <p>Voor de diehards … (geboortegewicht in gram)</p>
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
              !values.birthDate ||
              errors.birthDate ||
              !values.sex ||
              errors.weight
            }
          />
        </Form>
      )}
    />
  );
};

export default CreateGuess;