import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { authLogout } from 'redux/operations';
import { UserMenuContainer, UserEmail, LogOutButton } from './UserMenu.styled';
import { FiLogOut } from 'react-icons/fi';
import { TiUser } from 'react-icons/ti';

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <UserEmail>
        <TiUser color="#ef0060" />
        {userName}
      </UserEmail>
      <LogOutButton type="button" onClick={() => dispatch(authLogout())}>
        <FiLogOut />
      </LogOutButton>
    </UserMenuContainer>
  );
}
