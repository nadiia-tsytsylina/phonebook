import { StyledLink, AuthContainer } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthContainer>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </AuthContainer>
  );
}
