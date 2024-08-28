import axios, { AxiosResponse } from 'axios';
import { LoadingSpinner } from 'ts/common/loaders/loader';

const BEARER_TOKEN: Readonly<string> =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU4OTM3MzlhNzkwZmJjNzM2YWZmNDM4ZmMyMjIyZCIsIm5iZiI6MTcyMTU4MjQ3OS4yNjUxMDQsInN1YiI6IjY2OWQ0MWIzMWRkMDEwYjU1ZGRkNWMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT75Tmqq8mBXk-oA__ELZPxaQf-AGunpiBYR9_cjfUg';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common = {
  Authorization: BEARER_TOKEN,
};

const loader = new LoadingSpinner('.movies-list');

async function getData<T>(endpoint: string): Promise<T> {
  try {
    loader.show();
    const { data }: AxiosResponse<T> = await axios.get<T>(`${endpoint}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      throw error;
    } else {
      console.log('unexpected error: ', error);
      throw error;
    }
  } finally {
    loader.hide();
  }
}

export { getData };
