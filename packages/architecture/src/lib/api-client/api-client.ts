import Axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getSession, signOut } from "next-auth/react";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

async function handleRequestSuccess(request: InternalAxiosRequestConfig) {
  const session = await getSession();

  if (session?.token) {
    request.headers["Authorization"] = `Bearer ${session.token.access}`;
  }

  return request;
}

function handleRequestError(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}

function handleResponseSuccess(response: AxiosResponse) {
  return response;
}

function handleResponseError(error: AxiosError) {
  if (error.response?.status === 401) {
    signOut();
  }
  return Promise.reject(error);
}

AXIOS_INSTANCE.interceptors.request.use(
  handleRequestSuccess,
  handleRequestError,
);

AXIOS_INSTANCE.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError,
);

export const apiClient = <T>(
  config: AxiosRequestConfig,

  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();

  let axiosConfig: AxiosRequestConfig = {
    ...config,
    ...options,
    cancelToken: source.token,
  };

  const promise = AXIOS_INSTANCE(axiosConfig).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};

export default apiClient;

export interface ErrorType<Error> extends AxiosError<Error> {}

export type BodyType<BodyData> = BodyData;
