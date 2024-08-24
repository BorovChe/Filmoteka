import axios from 'axios';
import { IApiResponse, IApiError } from 'ts/helpers/types/responses';

const BEARER_TOKEN: Readonly<string> =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU4OTM3MzlhNzkwZmJjNzM2YWZmNDM4ZmMyMjIyZCIsIm5iZiI6MTcyMTU4MjQ3OS4yNjUxMDQsInN1YiI6IjY2OWQ0MWIzMWRkMDEwYjU1ZGRkNWMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT75Tmqq8mBXk-oA__ELZPxaQf-AGunpiBYR9_cjfUg';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common = {
  Authorization: BEARER_TOKEN,
};

async function getData(endpoint: string): Promise<IApiResponse | IApiError> {
  try {
    const { data } = await axios.get<IApiResponse>(`${endpoint}`);
    return data;
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
}

export { getData };
