import axios from 'axios';

const BEARER_TOKEN: string =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU4OTM3MzlhNzkwZmJjNzM2YWZmNDM4ZmMyMjIyZCIsIm5iZiI6MTcyMTU4MjQ3OS4yNjUxMDQsInN1YiI6IjY2OWQ0MWIzMWRkMDEwYjU1ZGRkNWMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT75Tmqq8mBXk-oA__ELZPxaQf-AGunpiBYR9_cjfUg';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common = {
  Authorization: BEARER_TOKEN,
};

async function getData(endpoint: string): Promise<any> {
  try {
    const response: any = await axios.get(`${endpoint}`);
    return await response;
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
}

export { getData };
