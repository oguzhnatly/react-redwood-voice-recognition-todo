import React, { FC, useEffect } from 'react'
import { Form, Submit } from '@redwoodjs/forms'
import { useForm, UseFormMethods } from 'react-hook-form'
import Input from 'src/components/Input/Input'
import { Link, routes } from '@redwoodjs/router'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const RegisterPage: FC = (): JSX.Element => {
  type formElements = {
    email: string
    password: string
    passwordValidate: string
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required.')
      .matches(/[^@]+@[^\.]+\..+/, 'Email is not valid.'),
    password: Yup.string()
      .required('Password is required.')
      .min(5, 'Should minimum 5 length')
      .max(15, 'Should maximum 15 length'),
    passwordValidate: Yup.string()
      .required('Confirm password is required.')
      .oneOf([Yup.ref('password'), null], 'Password do not match'),
  })

  const form: UseFormMethods<formElements> = useForm<formElements>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      passwordValidate: '',
    },
    resolver: yupResolver(SignupSchema),
  })
  // Watch form changes is required.
  form.watch()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <Form
          onSubmit={form.handleSubmit((d) => console.log(d))}
          className="mt-8 space-y-6"
        >
          <Input
            name="email"
            forwardRef={form.register.apply('email')}
            type="email"
            labelName="Email Address"
            placeholder={true}
            value={form.getValues().email}
            error={form.errors.email}
            onChange={(e) => form.setValue('email', e.target.value)}
            inputStyle={{ marginTop: 10 }}
          />
          <Input
            name="password"
            forwardRef={form.register.apply('password')}
            type="password"
            labelName="Password"
            placeholder={true}
            value={form.getValues().password}
            error={form.errors.password}
            onChange={(e) => form.setValue('password', e.target.value)}
            style={{ marginTop: 10 }}
            inputStyle={{ marginTop: 10 }}
          />
          <Input
            name="passwordValidate"
            forwardRef={form.register.apply('passwordValidate')}
            type="password"
            labelName="Validate Password"
            placeholder={true}
            value={form.getValues().passwordValidate}
            error={form.errors.passwordValidate}
            onChange={(e) => form.setValue('passwordValidate', e.target.value)}
            style={{ marginTop: 10 }}
            inputStyle={{ marginTop: 10 }}
          />

          <Submit className="button group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Register
          </Submit>
        </Form>
        <hr />
        <div className="mt-3 sm:mt-0">
          <Link
            to={routes.login()}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
