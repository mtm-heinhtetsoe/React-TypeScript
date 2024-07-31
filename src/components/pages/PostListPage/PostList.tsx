import { FC, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserListRepository } from '../../../repositories/UserListRepository';
import { ROLE } from '../../../enums/role';
import { color } from '../../../styles/theme';
import { Link } from 'react-router-dom';
import { PAGE_URL } from '../../../enums/urls';
import { Button } from 'react-bootstrap';

type Post = {
    id: number,
    title: string,
    description: string,
    status: number,
    created_user_id: number,
    updated_user_id: number,
    deleted_user_id?: number,
    created_at: string,
    updated_at: string,
    deleted_at?: string,
    created_user: string,
    updated_user: string
};

type Props = {
  postList: Post[];
  handlePostList: (id?: number) => void;
};

export const PostList: FC<Props> = ({ postList, handlePostList }: Props) => {
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
        handlePostList(id);
      }
    });
  };

  const cancelChange = () => {
    setOpen(false);
  };

  return (
    <>
      <div css={tableWrap}>
        <Button href={PAGE_URL.POST_CREATE} css={actionBtn}>Create</Button>
        {/* <Link to={PAGE_URL.POST_CREATE}>Create Post</Link> */}
        <table css={table}>
          <thead css={tableHeader}>
            <tr css={tableHeaderRow}>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created User</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post: Post) => {
              return (
                <tr css={tableBodyRow} key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.status}</td>
                  <td>{post.created_user}</td>
                  <td>{post.created_at}</td>
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
  margin: '10px 10px'
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