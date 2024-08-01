/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostCreateForm } from "./PostCreateForm"
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Post, PostRepository } from "../../../repositories/PostRepository";
import { useNavigate, useParams } from "react-router-dom";
import { PAGE_URL } from "../../../enums/urls";

export const PostEditPage = () => {
    const [success, setSuccess] = useState('');
    const [post, setPost] = useState();
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => getPost(Number(id)), [id]);

    const getPost = (id: number) => {
        PostRepository.getPostById(id)
            .then((response: any) => {
                setPost(response);
            })
            .catch((response: any) => setSuccess(response))
    }

    const handleUpdateSubmit: SubmitHandler<Post> = (data: Post) => {
        PostRepository.updatePost(Number(id), data)
            .then((response: any) => {
                let msg = "Post is updated Successfully.";
                if (response) setSuccess(msg);
                setTimeout(() => navigate(PAGE_URL.POST_LIST), 3000);
            })
            .catch((response: any) => setSuccess(response))
    }

    return (
        <div css={container}>
            <PostCreateForm onSubmit={handleUpdateSubmit} post={post} success={success} />
        </div>
    )
}

const container = css({
    padding: '0 0 70px',
});