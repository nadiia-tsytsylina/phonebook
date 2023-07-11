import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authRegister } from 'redux/operations';
import {
  Form,
  InputBox,
  Label,
  Input,
  SubmitButton,
} from 'components/ContactsForm/ContactsForm.styled';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authRegister({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Label htmlFor="name">Name</Label>
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          required
        />
      </InputBox>
      <InputBox>
        <Label htmlFor="email">Email</Label>
        <Input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          required
        />
      </InputBox>
      <InputBox>
        <Label htmlFor="password">Password</Label>
        <Input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          required
        />
      </InputBox>

      <SubmitButton type="submit">Register</SubmitButton>
    </Form>
  );
}
