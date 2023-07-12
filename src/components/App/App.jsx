// import { ToastContainer, Zoom } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { MutatingDots } from 'react-loader-spinner';
// import { Container, Title, SubTitle, Loader } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import ContactsForm from '../ContactsForm/ContactsForm';
// import Filter from '../Filter/Filter';
// import ContactsList from '../ContactsList/ContactsList';

import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import Contacts from 'Pages/Contacts';

export default function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    // <Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
    //   <Title>Phonebook</Title>
    //   <ContactsForm />
    //   <SubTitle>Contacts</SubTitle>
    //   <Filter />
    //   <ContactsList />
    //   {isLoading && !error && (
    //     <Loader>
    //       <MutatingDots
    //         height="100"
    //         width="100"
    //         color="#ff6c00"
    //         secondaryColor="#191c26"
    //         radius="12.5"
    //         ariaLabel="mutating-dots-loading"
    //         wrapperStyle={{}}
    //         wrapperClass=""
    //         visible={true}
    //       />
    //     </Loader>
    //   )}
    //   <ToastContainer
    //     autoClose={1500}
    //     theme="dark"
    //     transition={Zoom}
    //     hideProgressBar
    //   />
    // </Container>
  );
}
