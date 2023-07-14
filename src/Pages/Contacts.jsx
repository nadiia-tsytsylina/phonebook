import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Title,
  SubTitle,
  ContactListContainer,
} from 'components/CommonStyles/Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Loader from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactsForm />
      <SubTitle>Contacts</SubTitle>
      <ContactListContainer>
        <Filter />
        <ContactsList />
      </ContactListContainer>

      {isLoading && !error && <Loader />}
      <ToastContainer autoClose={1500} transition={Zoom} hideProgressBar />
    </>
  );
}
