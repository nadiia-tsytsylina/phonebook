import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import {
  HomeContainer,
  HomeLink,
  HomeTitle,
  HomeText,
} from 'components/CommonStyles/Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HomeContainer>
      <HomeTitle>Your Phonebook application</HomeTitle>
      <HomeText>
        This app allows you to store contacts including name and phone number.
      </HomeText>
      <HomeText>
        You can also filter the phone book by contact name, which solves the
        problem of finding contacts.
      </HomeText>
      {!isLoggedIn && (
        <HomeText>
          To use the application you need to
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Login</HomeLink>
        </HomeText>
      )}
    </HomeContainer>
  );
}
