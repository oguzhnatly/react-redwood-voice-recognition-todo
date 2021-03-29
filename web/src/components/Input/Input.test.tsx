import { render } from '@redwoodjs/testing'
import { Form } from '@redwoodjs/forms'

import Input from './Input'

describe('Input', () => {
  it('renders successfully when its type is email', () => {
    expect(() => {
      render(
        <Form>
          <Input name="testing" type="email" />
        </Form>
      )
    }).not.toThrow()
  })

  it('renders successfully when its type is text', () => {
    expect(() => {
      render(
        <Form>
          <Input name="testing" type="text" />
        </Form>
      )
    }).not.toThrow()
  })

  it('renders successfully when its type is password', () => {
    expect(() => {
      render(
        <Form>
          <Input name="testing" type="password" />
        </Form>
      )
    }).not.toThrow()
  })
})
