import {
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsItem.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success(`Contact deleted`);
  };
  return (
    <>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton type="button" onClick={handleDelete}>
        <FaTrashAlt />
      </DeleteButton>
    </>
  );
}
