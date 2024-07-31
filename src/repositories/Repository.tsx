import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const createConnection = (): AxiosInstance => {
    const connection = axios.create({
        baseURL: 'http://150.95.80.181:8101/api',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTI1MjE3NzYxZTVkYmEzNWZiYTBlNDhjYWJkZWZmYTAwMTYzNDE0OTU2NzdjNzY4NzBhMTRlYzZiMTBiMDQwNDRjOTI0OTVhNWM1MjdkMmMiLCJpYXQiOjE3MjI0MTc0NTAuOTMwNzQ2LCJuYmYiOjE3MjI0MTc0NTAuOTMwNzUsImV4cCI6MTcyMjQyNDY1MC43OTA4OTIsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.kjUzjFf2pT-FZvn89xqLtLoq1uCJGvnz9jX_0vyxQ08sglYskPDY0B2-YL_v6mMQf9fQh5lotdtjwwUgQsebPmS-Yfii7EdeINP91Wr3qS5vYjbyRoJ6YdHTFN0TR4BTQ73OkKkdDSJ5s2r-C2pO4KOifgEhHtY5wFsY5wCpgu8Jyil1IK_NIYzzO4sAuOSvq0Kn2LNiXxCVuibvT6K-yE6oX2z6A4gcd2HIkhClZj86QA0LYVPlW0CrmvGHcDLWCYxhn-PdjPWLG3N9cmgoii51yZO95rI78glWFQakVsBH4h_-2zVfzA6DnmtU2Hcbf4Ll_v4Kh7vstK8MBeJ9EDL4VInrmndFRfoAxxM6aoBiyQpuAG8qLgClm3TccDWnXUTvLw-BiYuqsEs9VYsiqV9MlvuV4q7AlPx1YNVcy6KBOdR-vx89SXyWui8Mg-WQVlLa1bYc7NiJeRD6CJ2LGDx_7CiFz1zLlr0bQTtXYqt8Uk5EQSUzd8j6ZyhNliz7jTKgduIsZ1owQTfRr80zhneizcv6LSoDe89rCPj38qTXDtPre547wHyLXLG4zRTNF1Imlkxt9--dKRoICfYP9M_vylLTSCgfHavfW1xhioglgVsYkCpYTja9RAn5-7em0bU2O8cu5IinXQzcfFzn0jcnmW5q9pryeBz1-h3t_tQ'
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
