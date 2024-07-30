import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const createConnection = (): AxiosInstance => {
    const connection = axios.create({
        baseURL: import.meta.env.API_BASE_uRL,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });

    connection.interceptors.response.use(
        (response: any) => response,
        (error: any) => error,
    );

    return connection;
}

const get = async <T,>(path: string, config?: AxiosRequestConfig) => {
    const connection = createConnection();
    const response = await connection.get<T>(path, config);
    return response.data;
}

const post = async <T,>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    const connection = createConnection();
    const response = await connection.post<T>(path, data, config);
    return response.data;
};
  
const put = async <T,>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    const connection = createConnection();
    const response = await connection.put<T>(path, data, config);
    return response.data;
};
  
const patch = async <T,>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    const connection = createConnection();
    const response = await connection.patch<T>(path, data, config);
    return response.data;
};
  
const del = async <T,>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    const connection = createConnection();
    const response = await connection.delete<T>(path, { ...config, data });
    return response.data;
};
  
export const Repository = {
    get,
    post,
    put,
    patch,
    del,
};
