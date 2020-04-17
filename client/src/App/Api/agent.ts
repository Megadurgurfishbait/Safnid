import axios, { AxiosResponse } from "axios";
import { INews } from "../Models/News";

axios.defaults.baseURL = "http://localhost:5000/safnid/europe-west1/api";

const responseBody = (response: AxiosResponse) => response.data;

// prettier-ignore
const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

// prettier-ignore
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody) 
};
// prettier-ignore
const News = {
  List: (): Promise<INews[]> => requests.get(`/news`),
  Single: (id: string) => requests.get(`/news/${id}`)
};

export default {
  News
};
