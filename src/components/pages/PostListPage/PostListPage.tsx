import React, { useEffect, useState } from "react"
import { PostList } from "./PostList"
import { ROLE } from "../../../enums/role"
import { PostRepository } from "../../../repositories/PostRepository"
import { useNavigate } from "react-router-dom"
import { PAGE_URL } from "../../../enums/urls"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { color } from "../../../styles/theme"
import { useAppSelector } from "../../../app/hooks"
import { getToken } from "../../auth/authSlice"

export const PostListPage = () => {
    const navigate = useNavigate();
    localStorage.setItem('role', 'Admin');
    const role: string | null = localStorage.getItem('role');
  
    const [postList, setPostList] = useState<any>([]);
    const [success, setSuccess] = useState('');
    const token = useAppSelector(getToken);
  
    const handlePostList = (id: number) => {
      PostRepository.deletePost(id, token).then((response: any) => {
        response && setSuccess(response.message);
      })
      .catch((response: any) => {
        response && setSuccess(response);
        navigate(PAGE_URL.ERROR);
      })
    };
  
    useEffect(() => {
      if (role === ROLE.ADMIN) {
        PostRepository.getAllPost(token).then((response: any) => {
          response && setPostList(response);
        });
      } else {
        navigate(PAGE_URL.ERROR);
      }
    }, [role, navigate, token, success]);

    return (
        <div>
            {token && (
              <div>
                {success && <p css={successMessage}>{success}</p>}
                <PostList postList={postList} handlePostList={handlePostList} />
              </div>
            )}
        </div>
    )
}

const successMessage = css({
  backgroundColor: color.venetianRed,
  borderColor: color.candyPink,
  color: color.cherryRed,
  textAlign: 'center',
  border: '1px solid',
  padding: 6,
  marginBottom: 20,
  borderRadius: 4,
  fontSize: 14,
  lineHeight: 2,
});
