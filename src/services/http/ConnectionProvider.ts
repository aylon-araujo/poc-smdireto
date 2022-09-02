import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type ConnectionProviderProps = {
  externalApiUrl: string;
  prefix?: string;
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
};

export class ConnectionProvider {
  protected readonly connection: AxiosInstance;

  constructor({
    externalApiUrl,
    prefix,
    requestInterceptor = (config: AxiosRequestConfig) => config,
    responseInterceptor = (config: AxiosResponse) => config,
  }: ConnectionProviderProps) {
    this.connection = axios.create({
      baseURL: this.getApiUrl(externalApiUrl, prefix),
    });
    this.setRequestInterceptor(requestInterceptor);
    this.setResponseInterceptor(responseInterceptor);
  }

  private setRequestInterceptor(
    responseInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig,
  ) {
    this.connection.interceptors.response.use(responseInterceptor);
  }

  private setResponseInterceptor(
    responseInterceptor: (config: AxiosResponse) => AxiosResponse,
  ) {
    this.connection.interceptors.response.use(responseInterceptor);
  }

  private getApiUrl(connectionUrl: string, prefix?: string): string {
    let url = connectionUrl;
    if (prefix) url += `/${prefix}`;

    return url;
  }
}
