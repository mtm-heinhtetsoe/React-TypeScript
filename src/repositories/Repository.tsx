import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const createConnection = (): AxiosInstance => {
    const connection = axios.create({
        baseURL: 'http://150.95.80.181:8101/api',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjc1N2NkZjY5MTc2ZjRkMDlmYjRmY2UwNzc5YTllNWYwM2ExNGI0ZWM1NmE0YjAyZTA3Njg4NmM0YzI3OTZkODk2MjQ4NTE0MThjYzdlMTgiLCJpYXQiOjE3MjI0ODQ1OTMuNDM1MjIxLCJuYmYiOjE3MjI0ODQ1OTMuNDM1MjI1LCJleHAiOjE3MjI0OTE3OTMuMjk1MTUyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.J06UmgpAxHPb1viDua8cYbJougfWRiVIvYOxPXtfMDfYUZC-6Rp_2svT1rE-NzmXaUtS5rO2-Yzy_In0aq5x05dR2fAi8wFNO5tvMfnFjX95Eqa9DdDnQyGM755CYHYmpESpGo0ItYg3CV3fnWowUKXxAWeVXxZXbZ9EOGkQ0_02dsbvHwHeQ-4D_u5gYNJJRILj0qdyih_z3Jm612qgxWo_6Z-JlNqj8nMC3vQd0t2RfvUSOCC0eij25ZQtQvXFZKxFEFtc8kw3oSGsF8aYKtwX8cU-3Np2kzx_9nOjmoyNafnXLay_0lhQTeKUD3cT5qFkgSHt89zznBn90dknVqUaaCxBoAtjsobVIKto9soteyBFhyJvwR4pMJGUNgtSnTIpbx6nwnKGybeAQX1Z2bawY4mGCI_avInGWXeaSHf7_ojodNGt58MXI4TLjTCcmDJ9m9JoKTtBFX_qpoJzxSCp7OzG9pm7kbxn7UwojaMstLqv7KVDudEjP8LTtSD6rS-ZwvZWcmciX29rSyDJbbz8Gs8Z5yiChfbTePLXVkxPUzGu3qKMo6jsHHRDn7iNYTzXh4487oIRBCPaPArCdaS6sOrEBMFYDnAnCKG2eTxpeVRPgrp3u6_4YpWgXzCfUbRSJsWxOsNxp-THEOED2KR-2nlLB5Kni0RAt2sYhTE'
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
    config?: AxiosRequestConfig,
) => {
    const connection = createConnection();
    const response = await connection.delete<T>(path, config);
    return response.data;
};
  
export const Repository = {
    get,
    post,
    put,
    patch,
    del,
};
