import axios, { Axios } from "axios";

export class HttpServer {
  public id: string;
  private url: string;
  private _instance: Axios;

  public get instance(): Axios {
    return this._instance;
  }

  constructor(id: string, url: string) {
    this.id = id;
    this.url = url;
    this._instance = axios.create({
      baseURL: this.url,
    });

    this._instance.interceptors.request.use((config) => {
      console.log("Request Interceptor For Server: ", this.id);
      return config;
    });
    this._instance.interceptors.response.use((config) => {
      console.log("Response Interceptor For Server: ", this.id);
      return config;
    });
  }
}
