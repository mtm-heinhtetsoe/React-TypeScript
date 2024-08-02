import { API_URL } from "../enums/urls"
import { Repository } from "./Repository"

const getAllUser = async (token: string) => {
    const response = await Repository.get(API_URL.USER_LIST, token);
    return response;
}

const deleteUser = async (id: number, token: string) => {
    const response = await Repository.del(API_URL.USER_LIST + `/${id}`, token);
    return response;
  };

export const UserListRepository = {
    getAllUser,
    deleteUser,
}