import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MutatingDots } from 'react-loader-spinner';
import { Title, SubTitle, Loader } from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

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
      <Filter />
      <ContactsList />
      {isLoading && !error && (
        <Loader>
          <MutatingDots
            height="100"
            width="100"
            color="#ff6c00"
            secondaryColor="#191c26"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Loader>
      )}
      <ToastContainer
        autoClose={1500}
        theme="dark"
        transition={Zoom}
        hideProgressBar
      />
    </>
  );
}
