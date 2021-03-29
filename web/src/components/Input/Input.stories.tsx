import Input from './Input'
import { Form } from '@redwoodjs/forms'

export const generated = () => {
  return (<Form><Input name="Email" type="email" /></Form>)
}

export default { title: 'Components/Input' }
