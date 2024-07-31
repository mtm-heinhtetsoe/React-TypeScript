import { FC, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserListRepository } from '../../../repositories/UserListRepository';
import { ROLE } from '../../../enums/role';
import { Button } from '../../atoms/Button/Button';
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
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();

  const handleDelete = (id: number) => {
    setUserId(id);
    setOpen(true);
  };

  const deleteUser = (e: React.MouseEvent<HTMLElement>, id?: number) => {
    UserListRepository.deleteUser(id).then((response: any) => {
      setOpen(false);
      if (response.message == 'success') {
        handleUserList(id);
      }
    });
  };

  const cancelChange = () => {
    setOpen(false);
  };

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
              <th>Action</th>
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
                  <td>
                    {user.type !== 0 && (
                      <Button
                        onClick={() => handleDelete(user.id)}
                        css={actionBtn}
                      >
                        Delete
                      </Button>
                    )}
                  </td>
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

const actionBtn = css({
  padding: '7px 14px 6px',
});

const btn = css({
  height: '35px !important',
  top: '-9px',
  maxWidth: '130px !important',
  marginTop: '20px',
  margin: '50px 10px 20px 10px',
  border: 'initial',
  padding: '10px 15px',
  borderRadius: '10px',
  width: '40%',
  color: color.lightGrey,
});

const modalBox = css({
  width: '35%',
  height: '25%',
  border: '1px solid' + color.darkTangerine,
  backgroundColor: color.white,
  padding: 20,
  borderRadius: 10,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: 0,
  right: 0,
  margin: '0 auto',
  textAlign: 'center',
  color: color.darkTangerine,
});

const tableWrap = css({
  paddingBottom: '100px',
});