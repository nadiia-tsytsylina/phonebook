import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigation, NavContainer, Container } from './Layout.styled';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navigation>
        <NavContainer>{isLoggedIn ? <UserMenu /> : <AuthNav />}</NavContainer>
      </Navigation>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
