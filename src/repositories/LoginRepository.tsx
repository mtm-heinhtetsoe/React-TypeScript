
import { API_URL } from '../enums/urls';
import { Repository } from './Repository';

type LoginResultSchema = {
  status: any;
  data: any;
  user: any;
  access_token: any;
  success: any;
  error: any;
};

const login = async (param: any) => {
  const response = await Repository.post<LoginResultSchema>(
    API_URL.LOGIN,
    param,
  );
  return response;
};

export const LoginRepository = {
  login
};