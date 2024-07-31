import { API_URL } from "../enums/urls"
import { Repository } from "./Repository"

const getAllUser = async () => {
    const response = await Repository.get(API_URL.USER_LIST);
    return response;
}

const deleteUser = async (id?: number) => {
    const response = await Repository.del(API_URL.USER_LIST + `/${id}`);
    return response;
  };

export const UserListRepository = {
    getAllUser,
    deleteUser,
}