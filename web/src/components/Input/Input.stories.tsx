import Input from './Input'
import { Form } from '@redwoodjs/forms'

export const email = () => {
  return (
    <Form>
      <Input
        name="Email"
        labelName="Email Address"
        type="email"
        style={{ margin: 10 }}
        inputStyle={{ marginTop: 5 }}
      />
    </Form>
  )
}

export const password = () => {
  return (
    <Form>
      <Input
        name="Password"
        labelName="Password"
        type="password"
        style={{ margin: 10 }}
        inputStyle={{ marginTop: 5 }}
      />
    </Form>
  )
}

export const anyText = () => {
  return (
    <Form>
      <Input
        name="Any Text"
        labelName="Email Address"
        type="text"
        style={{ margin: 10 }}
        inputStyle={{ marginTop: 5 }}
      />
    </Form>
  )
}

export default { title: 'Components/Input' }
