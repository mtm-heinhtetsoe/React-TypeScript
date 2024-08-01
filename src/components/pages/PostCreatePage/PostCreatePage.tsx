/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostCreateForm } from "./PostCreateForm"
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Post, PostRepository } from "../../../repositories/PostRepository";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "../../../enums/urls";

export const PostCreatePage = () => {
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleCreateSubmit: SubmitHandler<Post> = (data: Post) => {
        PostRepository.createPost(data)
            .then((response: any) => {
                let msg = "Post is created Successfully.";
                if (response) setSuccess(msg);
                setTimeout(() => navigate(PAGE_URL.POST_LIST), 3000);
            })
            .catch((response: any) => setSuccess(response))
    }

    return (
        <div css={container}>
            <PostCreateForm onSubmit={handleCreateSubmit} success={success} />
        </div>
    )
}

const container = css({
    padding: '0 0 70px',
});