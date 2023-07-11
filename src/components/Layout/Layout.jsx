import { Outlet } from 'react-router-dom';
import { Navigation, Container, StyledLink } from './Layout.styled';

export default function Layout() {
  return (
    <div>
      <Navigation>
        <Container>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </Container>
      </Navigation>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
