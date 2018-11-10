import * as React from 'react';
import { Formik, Form, FieldProps, FormikProps, Field } from 'formik';
import { BigInput, Input, FixedSpan, labelContainerStyles } from 'src/assets/styles';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import NamesList from './NamesList';
import { IUser } from '../../typeDefs';
interface IFormValues {
  name?: string,
  user?: string,
}

interface ICreateUserFormProps {
  createName: (IFormValues) => void,
  setUser: (userName?: string) => void,
  user: IUser,
  data?: any,
  loading?: boolean,
  error?: any,
}




const CreateName: React.SFC<ICreateUserFormProps> = ({ createName, data, error, loading, user, setUser }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        user: user.name,
      }}
      validate={
        values => {
          const errors: IFormValues = {};
          if (!values.name)
            errors.name = 'Vul eerst een naam in!';
          else if (values.name.length < 2) errors.name = 'Die naam is een beetje kort, nee?';
          else if (values.name.length > 20) errors.name = 'Dat is geen naam, dat is een volzin!';
          else if (values.user && values.user.length > 20) errors.user = 'Zo een lange naam kunnen wij niet onthouden.';
          return errors;
        }
      }
      onSubmit={(values: IFormValues) => {
        setUser(values.user);
        createName({ variables: { name: values.name, userName: values.user } });
      }}
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
          {
            user.name ? (
              <div className={css`
                display: flex;
                flex-flow: column;
                align-items: center;
                margin-bottom: 40px;
              `}>
                <div className={css`
                  font-size: 16px;
                  padding: 10px 20px;
                  margin: 10px;
                  background: rgba(255,255,255,.1);
                  border-radius: 60px;
                `}>
                  {user.name}
                </div>
                <Link to="/the-naming-game/redirect" className={css`
                  font-size: 12px;
                  margin-top: 10px;
                  cursor: pointer;
                `} onClick={() => setUser('')}>
                  Verander van gebruiker
                </Link>
              </div>

            ) : (

                <Field
                  name="user"
                  render={({ field, form }: FieldProps<IFormValues>) => (
                    <div className={labelContainerStyles}>
                      <h2>Jouw (eigen) naam</h2>
                      <Input type="text" {...field} placeholder="Ilja" error={form.errors.user} />
                      <FixedSpan>
                        {form.touched.user &&
                          form.errors.user &&
                          form.errors.user}
                      </FixedSpan>
                    </div>
                  )}
                />
              )
          }
          <div>{error ? error.message === "GraphQL error: A unique constraint would be violated on Name. Details: Field name = name" ? "Deze naam is al toegevoegd aan de lijst!" : error.message : ''}</div>
          <Button
            text='Toevoegen'
            loading={loading ? true : false}
            disabled={errors.name || !values.name || errors.user}
          />
        </Form>,
        <NamesList key={12} />]
      )}
    />
  );
};

export default CreateName;