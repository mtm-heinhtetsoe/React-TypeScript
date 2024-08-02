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

const getAllPost = async (token: string) => {
    const response = await Repository.get(API_URL.POST_LIST, token);
    return response;
};

const getPostById = async (id: number, token: string) => {
    const response = await Repository.get(API_URL.POST_DETAIL + `${id}`, token);
    return response;
}

const createPost = async (token: string, post: Post) => {
    const response = await Repository.post<PostResultSchema[]>(API_URL.POST_CREATE, token, post);
    return response;
};

const updatePost = async (id: number, token: string, post: Post) => {
    const response = await Repository.post<PostResultSchema[]>(API_URL.POST_UPDATE + `${id}`, token, post);
    return response;
}

const deletePost = async (id: number, token: string) => {
    const response = await Repository.del<PostResultSchema[]>(API_URL.POST_DELETE + `${id}`, token);
    return response;
}

export const PostRepository = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}