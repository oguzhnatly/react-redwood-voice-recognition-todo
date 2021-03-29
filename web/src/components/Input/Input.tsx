import React, { FC, CSSProperties } from 'react'
import { theme } from 'src/../tailwind.config'
import { Label, TextField, FieldError, PasswordField } from '@redwoodjs/forms'

interface InputPropTypes {
  name: string
  labelName?: string
  type?: 'text' | 'email' | 'password'
  validation?: inputValidationType
  className?: string
  style?: CSSProperties
  inputStyle?: CSSProperties
}

type inputValidationType = {
  required?: boolean
  pattern?: { value: RegExp; message: string }
  validate?: { matchesInitialValue: (value: string) => string }
  [key: string]: any
}

const Input: FC<InputPropTypes> = (props): JSX.Element => {
  const inputThemeClass: string =
    theme.input.classes.join(' ') + props.className

  const defaultEmailValidation: inputValidationType = {
    required: true,
    pattern: {
      value: /[^@]+@[^\.]+\..+/,
      message: 'Please enter a valid email address.',
    },
  }

  const inputValidation: inputValidationType =
    props.validation || (props.type === 'email' ? defaultEmailValidation : {})

  const inputName: string =
    props.name.charAt(0).toUpperCase() + props.name.slice(1)

  const inputProps: {
    [key: string]: string | CSSProperties | Record<string, unknown>
  } = {
    name: inputName,
    className: `input ${inputThemeClass}`,
    placeholder: inputName,
    errorClassName: `input error ${inputThemeClass} ${theme.input.errorBorderColor}`,
    style: props.inputStyle,
    validation: inputValidation,
  }

  return (
    <div style={props.style}>
      {props.labelName && (
        <Label
          name={inputName}
          className="label"
          errorClassName={`label error ${theme.input.errorTextColor}`}
        >
          {props.labelName}
        </Label>
      )}
      {props.type !== 'password' ? (
        <TextField {...inputProps} />
      ) : (
        <PasswordField {...inputProps} />
      )}
      <FieldError name={inputName} className={`error ${theme.input.errorTextColor}`} />
    </div>
  )
}

export default Input
