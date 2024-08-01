import { API_URL } from "../enums/urls"
import { Repository } from "./Repository"

export type Post = {
    title?: string;
    description?: string;
    status?: string;
}

type PostResultSchema = {
    msg: any;
};

const getAllPost = async () => {
    const response = await Repository.get(API_URL.POST_LIST);
    return response;
};

const getPostById = async (id: number) => {
    const response = await Repository.get(API_URL.POST_DETAIL + `${id}`);
    return response;
}

const createPost = async (post: Post) => {
    const response = await Repository.post<PostResultSchema[]>(API_URL.POST_CREATE, post);
    return response;
};

const updatePost = async (id: number, post: Post) => {
    const response = await Repository.post<PostResultSchema[]>(API_URL.POST_UPDATE + `${id}`, post);
    return response;
}

const deletePost = async (id: number) => {
    const response = await Repository.del<PostResultSchema[]>(API_URL.POST_DELETE + `${id}`);
    return response;
}

export const PostRepository = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}