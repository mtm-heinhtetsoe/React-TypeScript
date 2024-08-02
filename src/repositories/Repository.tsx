import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

let token: string = "";

const createPreConnection = (): AxiosInstance => {
    const connection = axios.create({
        baseURL: 'http://150.95.80.181:8101/api',
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

const createConnection = (): AxiosInstance => {
    const connection = axios.create({
        baseURL: 'http://150.95.80.181:8101/api',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': `Bearer ${token}`,
        },
    });

    connection.interceptors.response.use(
        (response: any) => response,
        (error: any) => error,
    );

    return connection;
}

const login = async <T,>(path: string, data?: any) => {
    const connection = createPreConnection();
    const response = await connection.post<T>(path, data);
    return response;
}

const get = async <T,>(path: string, tk:string, config?: AxiosRequestConfig) => {
    token = tk;
    const connection = createConnection();
    const response = await connection.get<T>(path, config);
    return response.data;
}

const post = async <T,>(
    path: string,
    tk: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    token = tk;
    const connection = createConnection();
    const response = await connection.post<T>(path, data, config);
    return response.data;
};
  
const put = async <T,>(
    path: string,
    tk: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    token = tk;
    const connection = createConnection();
    const response = await connection.put<T>(path, data, config);
    return response.data;
};
  
const patch = async <T,>(
    path: string,
    tk: string,
    data?: any,
    config?: AxiosRequestConfig,
) => {
    token = tk;
    const connection = createConnection();
    const response = await connection.patch<T>(path, data, config);
    return response.data;
};
  
const del = async <T,>(
    path: string,
    tk: string,
    config?: AxiosRequestConfig,
) => {
    token = tk;
    const connection = createConnection();
    const response = await connection.delete<T>(path, config);
    return response.data;
};
  
export const Repository = {
    login,
    get,
    post,
    put,
    patch,
    del,
};
