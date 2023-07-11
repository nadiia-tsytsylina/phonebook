import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/operations';
import {
  Form,
  InputBox,
  Label,
  Input,
  SubmitButton,
} from 'components/ContactsForm/ContactsForm.styled';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
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
    dispatch(authLogin({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <SubmitButton type="submit">Log in</SubmitButton>
    </Form>
  );
}
