import axios from 'axios';
import { FetchImagesResponse } from './App.types';

const myAxios = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export default async function FetchImages(
  query: string,
  page: number
): Promise<FetchImagesResponse> {
  const params = {
    query,
    page,
    per_page: 12,
    client_id: 'NGBz_nP6r-UT1dDt9Xo_ZEjG4XuSomOyLLQ-eAoR6c0',
  };
  const response = await myAxios.get<FetchImagesResponse>('/search/photos', {
    params,
  });
  return {
    results: response.data.results,
    total: response.data.total,
  };
}
