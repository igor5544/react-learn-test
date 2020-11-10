import React from 'react';
import s from '../styles/login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Checkbox } from '../components/common/FormsControls/FormsControls';
import { required } from '../utils/validators/validators';
import MainBtn from '../components/MainBtn';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form className={'main-form'} onSubmit={props.handleSubmit}>
      <Field type="text" wrapperclass={'main-form__field-wrpper'} name={'email'}
        placeholder="Login" component={Input} validate={[required]}
      />
      <Field type="password" wrapperclass={'main-form__field-wrpper'} name={'password'}
        placeholder="Passwrd" component={Input} validate={[required]}
      />
      <div className={'main-form__section'}>
        <Field type="checkbox" name={'rememberMe'} id="checkbox" label={'Remember me'}
          component={Checkbox}
        />
      </div>
      {
        props.error &&
        <p className={s.error}>
          {props.error}
        </p>
      }
      <MainBtn type="submit">Login</MainBtn>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    const { email, password, rememberMe } = formData;
    login(email, password, rememberMe);
  }

  if (isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <section>
      <h2 className="main-title">Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </section>
  )
}

export default Login;
