import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsFetchingUser } from 'redux/selectors';
import { NavContainer, Container, StyledLink, MainNav } from './Layout.styled';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchingUser = useSelector(selectIsFetchingUser);
  return (
    <>
      <NavContainer>
        {!isFetchingUser && (
          <MainNav>
            <StyledLink to="/">Home</StyledLink>
            {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
          </MainNav>
        )}
        {isLoggedIn && !isFetchingUser && <UserMenu />}
        {!isLoggedIn && !isFetchingUser && <AuthNav />}
      </NavContainer>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
