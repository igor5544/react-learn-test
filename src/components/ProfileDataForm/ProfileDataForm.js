import React from 'react';
import s from './profileDataForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input, Checkbox, Textarea } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import MainBtn from '../MainBtn';

const ProfileDataForm = ({ handleSubmit, profileContacts, error }) => {
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Field type="text" id="fullName"
        name="fullName" label="Full name: "
        component={Input} wrapperclass={s.field}
        validate={[required]}
      />
      <Field type="text" id="aboutMe"
        name="aboutMe" label="About me: "
        component={Textarea} wrapperclass={`${s.field} ${s['textarea-wrapper']}`}
        validate={[required]}
      />
      <Field type="checkbox" name={'lookingForAJob'}
        id="lookingForAJob" label={'Looking for job?'}
        component={Checkbox} wrapperclass={`${s['checkbox-wrapper']} ${s.field}`}
      />
      <Field type="text" id="lookingForAJobDescription"
        name="lookingForAJobDescription" label="My professional skills: "
        component={Textarea} wrapperclass={`${s.field} ${s['textarea-wrapper']}`}
        validate={[required]}
      />
      <b style={{ display: 'block', marginBottom: '15px' }}>
        Contacts:
      </b>
      {
        Object.keys(profileContacts).map(key => {
          return (
            <Field type="text" id={key}
              name={`contacts.${key}`} label={key + ': '}
              component={Input} wrapperclass={`${s.field} ${s['contacts-wrapper']}`}
              placeholder={key}
              key={key}
            />
          )
        })
      }
      {
        error &&
        <p className={s.error}>
          {error}
        </p>
      }
      <MainBtn type="submit">Save</MainBtn>
    </form>
  )
}

export default reduxForm({
  form: 'ProfileData'
})(ProfileDataForm);