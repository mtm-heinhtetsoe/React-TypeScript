import { css } from '@emotion/react';
import { UserList } from './UserList';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserListRepository } from '../../../repositories/UserListRepository';
import { ROLE } from '../../../enums/role';
import { PAGE_URL } from '../../../enums/urls';
import { Heading } from '../../atoms/Heading/Heading';
import { useAppSelector } from '../../../app/hooks';
import { getToken } from '../../auth/authSlice';

export const UserListPage = () => {
  const navigate = useNavigate();
  localStorage.setItem('role', 'Admin');
  const role: string | null = localStorage.getItem('role');

  const [userList, setUserList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const token = useAppSelector(getToken);

  const handleUserList = (id?: number) => {
    setUserList((prevUsers: []) =>
      prevUsers.filter((user: any) => user.id !== id),
    );
  };

  useEffect(() => {
    if (role === ROLE.ADMIN) {
      UserListRepository.getAllUser(token).then((response: any) => {
        response && setUserList(response);
        setLoading(false);
      });
    } else {
      navigate(PAGE_URL.ERROR);
    }
  }, [role, navigate]);

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div>
          <div css={topTitle}>
            <Heading
              headingLevel="h2"
              fontFamily="Pacifico-Regular"
            >
              User List
            </Heading>
          </div>
          <UserList userList={userList} handleUserList={handleUserList} />
        </div>
      )}
    </>
  );
};

const topTitle = css({
  textAlign: 'center',
});