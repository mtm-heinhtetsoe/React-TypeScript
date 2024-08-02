
import { API_URL } from '../enums/urls';
import { Repository } from './Repository';

type LoginResultSchema = {
  user_id: number;
  user_name: string;
  user_type: string;
  token_type: string;
  access_token: string;
  expires_at: string;
};

const login = async (param: any) => {
  const response = await Repository.login<LoginResultSchema>(
    API_URL.LOGIN,
    param,
  );
  return response;
};

export const LoginRepository = {
  login
};