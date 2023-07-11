import { UserMenuContainer, UserEmail, LogOutButton } from './UserMenu.styled';
import { FiLogOut } from 'react-icons/fi';

export default function UserMenu() {
  return (
    <UserMenuContainer>
      <UserEmail>mango@mail.com</UserEmail>
      <LogOutButton>
        Log out <FiLogOut color="#ff6c00" />
      </LogOutButton>
    </UserMenuContainer>
  );
}
