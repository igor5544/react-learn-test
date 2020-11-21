import React from 'react';
import s from './formsControls.module.css';

export const FormControl = ({ children, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={`${s['form-control']}  ${hasError && s.error} ${props.wrapperclass}`}>
      {children}
      {
        hasError && <p> {meta.error} </p>
      }
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, label, ...restProps } = props;

  return <FormControl {...props}>
    {label && <label htmlFor={restProps.id}>{label}</label>}
    <textarea {...input} {...restProps} ></textarea>
  </FormControl>
}

export const Input = (props) => {
  const { input, meta, label, ...restProps } = props;

  return <FormControl {...props}>
    {label && <label htmlFor={restProps.id}>{label}</label>}
    <input {...input} {...restProps} ></input>
  </FormControl>
}

export const Checkbox = (props) => {
  const { input, meta, label, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} ></input>
      <label htmlFor={restProps.id}>{label}</label>
    </FormControl>
  )
}