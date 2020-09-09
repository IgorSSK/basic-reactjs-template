import useSWR from 'swr';
import { AxiosInstance } from 'axios';
import { useCallback } from 'react';

export function useFetch<Data = any, Error = any>(
  axiosAPI: AxiosInstance,
  httpMethod: 'get' | 'post' | 'put' | 'delete',
  url: string,
  params?: object,
  query?: object
) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async url => {
      const response = await apiFetch(url, params, query);

      return response.data;
    },
    {
      onError: (error, key) => console.log(error, key)
    }
  );

  const apiFetch = useCallback(
    async (url: string, params?: object, query?: object) => {
      switch (httpMethod) {
        case 'get':
          return await axiosAPI.get(url, { params: query });
        case 'post':
          return await axiosAPI.post(url, params, { params: query });
        case 'put':
          return await axiosAPI.post(url, params, { params: query });
        case 'delete':
          return await axiosAPI.get(url, { params: query });
      }
    },
    []
  );

  return { data, error, mutate };
}
