import useSWR from 'swr';
import { AxiosInstance } from 'axios';
import { useCallback, useState } from 'react';
import Formatter from '../helpers/formatters';

export function useFetch<Data = any, Error = any>(
  axiosAPI: AxiosInstance,
  url: string,
  httpMethod?: 'get' | 'post' | 'put' | 'delete',
  params?: object,
  query?: object
) {
  const [, setMethod] = useState(httpMethod);

  const { data, error, mutate } = useSWR<Data, Error>(
    httpMethod ? url : null,
    async url => {
      const response = await apiFetch(url, params, query);

      return response?.data;
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
    [axiosAPI, httpMethod]
  );

  const get = (url: string) => {
    setMethod('get');
  };

  return { data, error, mutate, get };
}

type Response<T> = [T];

export function useFetchQueue<T>(
  axiosAPI: AxiosInstance,
  httpMethod: 'get' | 'post' | 'put' | 'delete',
  url: string,
  params?: { dateParams: object[]; query?: object[] }[]
): Response<T> {
  const [data, setData] = useState<any>([]);

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
    [axiosAPI, httpMethod]
  );

  const fetchQueue = useCallback(() => {
    if (params) {
      const fetchQueue = Formatter.splitList(params, 4);

      fetchQueue.map(queue => {
        const promises = queue.map(fetch =>
          apiFetch(url, fetch.dateParams, fetch.query)
        );

        Promise.all(promises).then(result =>
          result.map(response => setData([...data, response.data]))
        );
        return null;
      });
    } else {
      console.log('No parameters were found!');
    }
  }, [apiFetch, params, data, url]);

  fetchQueue();

  return [data];
}
