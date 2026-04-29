import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


const getAxiosInstance = async (): Promise<AxiosInstance | null> => {
  try {
    const token = localStorage.getItem("token");

    const instance = axios.create({
      baseURL: "http://localhost:5000/api",
    });

    if (token) {
      instance.defaults.headers.Authorization = `Bearer ${token}`;
    }

    return instance;
  } catch {
    return null;
  }
};


const apiRequest = async <T = any>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?:any,
  config?: AxiosRequestConfig
): Promise<T | null> => {
  try {
    const instance = await getAxiosInstance();
    if (!instance) return null;

    let response;

    if (method === "get" || method === "delete") {
      response = await instance[method](url, config);
    } else {
      response = await instance[method](url, data, config);
    }

    return response.data;
  } catch (error: any) {
    console.error("API Error:", error?.response?.data || error.message);
    return null;
  }
};

export const axiosGet = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T | null> => {
  return apiRequest<T>("get", url, undefined, config);
};

export const axiosPost = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T | null> => {
  return apiRequest<T>("post", url, data, config);
};

export const axiosPut = async <T = any>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T | null> => {
  return apiRequest<T>("put", url, data, config);
};

export const axiosDelete = async <T = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T | null> => {
  return apiRequest<T>("delete", url, undefined, config);
};