import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { color } from '../../../styles/theme';
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

const tableWrap = css({
  paddingBottom: '100px',
});