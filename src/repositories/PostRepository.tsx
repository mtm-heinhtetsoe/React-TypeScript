import { API_URL } from "../enums/urls"
import { Repository } from "./Repository"

export type Post = {
    title?: string;
    description?: string;
}

type CreatePostResultSchema = {
    msg: any;
  };

const getAllPost = async () => {
    const response = await Repository.get(API_URL.POST_LIST);
    return response;
}

const createPost = async (post: Post) => {
    const response = await Repository.post<CreatePostResultSchema[]>(API_URL.POST_CREATE, post);
    return response;
  };

export const PostRepository = {
    getAllPost,
    createPost,
}