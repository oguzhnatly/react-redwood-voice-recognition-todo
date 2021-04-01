import React, { FC, CSSProperties, ChangeEvent } from 'react'
import { theme } from 'src/../tailwind.config'
import { Label, TextField, PasswordField } from '@redwoodjs/forms'
import { FieldError as inputErrorType } from 'react-hook-form'

interface InputPropTypes {
  name: string
  labelName?: string
  placeholder?: string | boolean
  type?: 'text' | 'email' | 'password'
  validation?: inputValidationType
  error?: inputErrorType
  className?: string
  style?: CSSProperties
  inputStyle?: CSSProperties
  forwardRef?: HTMLInputElement
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
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

  const inputProps: {
    [key: string]:
      | string
      | CSSProperties
      | Record<string, unknown>
      | HTMLInputElement
      | ((e: ChangeEvent<HTMLInputElement>) => void)
  } = {
    name: props.name,
    className: `input ${inputThemeClass}`,
    placeholder: props.placeholder === true ? props.labelName : undefined,
    errorClassName: `input error ${inputThemeClass} ${theme.input.errorBorderColor}`,
    style: props.inputStyle,
    validation: props.validation || undefined,
    ref: props.forwardRef || undefined,
    value: props.value || undefined,
    onChange: props.onChange || undefined,
  }

  return (
    <div style={props.style}>
      {props.labelName && (
        <Label
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
      {props.error && (
        <span className="error-message">{props.error.message}</span>
      )}
    </div>
  )
}

export default Input
