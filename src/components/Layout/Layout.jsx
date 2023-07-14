import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { NavContainer, Container, StyledLink, MainNav } from './Layout.styled';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavContainer>
        <MainNav>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </MainNav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavContainer>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
