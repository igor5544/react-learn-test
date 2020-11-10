import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../utils/validators/validators';
import s from '../styles/messageForm.module.css';
import MainBtn from './MainBtn';

const maxLength = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form method="GET" onSubmit={props.handleSubmit}>
      <Field className={s.textarea} wrapperclass={s.textarea__wrapper} rows="5" name={'message'} component={Textarea}
        validate={[required, maxLength]}
      />
      <MainBtn type={'submit'}>
        {props.btnText}
      </MainBtn>
    </form>
  )
}

const MessageForm = ({ btnText, addText, id }) => {

  const AddMessageReduxForm = reduxForm({
    form: `messageForm${id}`
  })(AddMessageForm)

  const addNewMessage = (values) => {
    addText(values.message, id);
  }

  return (
    <AddMessageReduxForm onSubmit={addNewMessage} btnText={btnText} />
  )
}

export default MessageForm;