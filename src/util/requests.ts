import qs from "qs";
import axios, { AxiosRequestConfig } from "axios";
import history from "./history";
import jwtDecode from "jwt-decode";

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "myclientid";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? "myclientsecret";

type LoginData = {
  username: string;
  password: string;
};

//request de login
export const requestBackendLogin = (loginData: LoginData) => {
  //montando o headers que é passado no AxiosRequestConfig quando faz login
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  //corpo da requisição (convertidos em form-urlencoded usando o qs)
  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  //retorna método POST para fazer a requisição de login
  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "oauth/token",
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthDataFromLocalStorage().access_token,
      }
    : config.headers;
  return axios({ ...config, baseURL: BASE_URL, headers });
};

//decodificar token com JWT
type Role = "ROLE_VISITOR" | "ROLE_MEMBER";

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export const getTokenData = (): TokenData | undefined => {
  try {
    const loginResponse = getAuthDataFromLocalStorage();
    return jwtDecode(loginResponse.access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

export const isAuthenticated = (): boolean =>{
  const tokenData = getTokenData();
  return (tokenData && (tokenData.exp * 1000) > Date.now()) ? true : false;
}

//Local Storage
const tokenKey = "authData";

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
};

export const saveAuthDataToLocalStorage = (obj: LoginResponse) => {
  localStorage.setItem(tokenKey, JSON.stringify(obj));
};

export const getAuthDataFromLocalStorage = () => {
  const str = localStorage.getItem(tokenKey) ?? "{}";
  return JSON.parse(str) as LoginResponse;
};

export const removeAuthDataFromLocalStorage = () => {
  localStorage.removeItem(tokenKey);
}

// Response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    //401-unauthorized ou 403-Forbidden
    if (error.response.status === 401 || error.response.status === 403) {
      history.push("/");
    }
    return Promise.reject(error);
  }
);
