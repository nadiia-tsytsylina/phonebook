import { toast } from 'react-toastify';
import { TiUserAdd } from 'react-icons/ti';
import {
  Form,
  InputBox,
  Label,
  Input,
  SubmitButton,
} from './ContactsForm.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const names = contacts.map(contact => contact.name);
    const numbers = contacts.map(contact => contact.number);
    const newContact = { name: name, number: number };

    if (names.includes(name)) {
      toast.error(`${name} is already in contacts`);
    } else if (numbers.includes(number)) {
      toast.error(`${number} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      toast.success(`${name} added in contacts`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
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
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputBox>
      <InputBox>
        <Label htmlFor="number">Number</Label>
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputBox>

      <SubmitButton type="submit">
        Add contact <TiUserAdd />
      </SubmitButton>
    </Form>
  );
}
