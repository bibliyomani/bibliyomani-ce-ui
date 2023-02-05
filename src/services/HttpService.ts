import {
  completeNavigationProgress,
  startNavigationProgress,
} from '@mantine/nprogress';
import axios, { AxiosError } from 'axios';

const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

async function get<Type>(url: string): Promise<[Type, AxiosError]> {
  try {
    startNavigationProgress();
    await sleep(2000);
    const { data } = await axios.get<Type>(url);
    completeNavigationProgress();
    return Promise.resolve([data, null]);
  } catch (e) {
    return Promise.resolve([undefined, e]);
  }
}

async function post<Type>(
  url: string,
  body?: any,
): Promise<[Type, AxiosError]> {
  try {
    const { data } = body
      ? await axios.post<Type>(url, body)
      : await axios.post<Type>(url);
    return Promise.resolve([data, null]);
  } catch (e) {
    return Promise.resolve([undefined, e]);
  }
}

async function put<Type>(url: string, body?: any): Promise<[Type, AxiosError]> {
  try {
    const { data } = body
      ? await axios.put<Type>(url, body)
      : await axios.put<Type>(url);
    return Promise.resolve([data, null]);
  } catch (e) {
    return Promise.resolve([undefined, e]);
  }
}

async function patch<Type>(
  url: string,
  body?: any,
): Promise<[Type, AxiosError]> {
  try {
    const { data } = body
      ? await axios.patch<Type>(url, body)
      : await axios.patch<Type>(url);
    return Promise.resolve([data, null]);
  } catch (e) {
    return Promise.resolve([undefined, e]);
  }
}

export { get, post, put, patch };
