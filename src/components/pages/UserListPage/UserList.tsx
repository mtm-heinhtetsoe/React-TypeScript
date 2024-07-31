import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ROLE } from '../../../enums/role';
import { color } from '../../../styles/theme';

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  type: number;
  address: string;
  dob: string;
};

type Props = {
  userList: User[];
  handleUserList: (id?: number) => void;
};

export const UserList: FC<Props> = ({ userList, handleUserList }: Props) => {
  return (
    <>
      <div css={tableWrap}>
        <table css={table}>
          <thead css={tableHeader}>
            <tr css={tableHeaderRow}>
              <th>ID</th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone</th>
              <th>Address</th>
              <th>DOB</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: User) => {
              return (
                <tr css={tableBodyRow} key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.dob}</td>
                  <td>{user.type === 0 ? ROLE.ADMIN : ROLE.USER}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const table = css({
  width: '60%',
  maxWidth: '1350px',
  margin: '0 auto',
  textAlign: 'left',
});

const tableHeader = css({
  fontWeight: 'bold',
  borderBottom: '1px solid' + color.grey,
});

const tableHeaderRow = css({
  th: {
    padding: '20px 10px',
  },
});

const tableBodyRow = css({
  td: {
    padding: '16px 10px 15px 11px',
  },
});

const tableWrap = css({
  paddingBottom: '100px',
});