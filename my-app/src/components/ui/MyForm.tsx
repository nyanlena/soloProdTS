import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import type { SubmitHandler } from '../../types/subFormData';

type MyFormType = {
  submitHandler: SubmitHandler;
};

export default function MyForm({ submitHandler }: MyFormType): JSX.Element {
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="exampleEmail">Enter house 🐍 🦁 🦡 🦅:</Label>
        <Input id="house" name="house" placeholder="houses..." type="text" />
        <Button type="submit">FILTER!!!</Button>
      </FormGroup>
    </Form>
  );
}
