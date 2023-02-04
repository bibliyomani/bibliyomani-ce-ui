import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { get } from 'services/HttpService';

export interface UseFetchInterface<T> {
  state: T;
  loading: boolean;
  err: AxiosError;
}

const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

function useFetch<T>(url: string): UseFetchInterface<T> {
  const [state, setState] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<AxiosError>();

  useEffect(() => {
    (async () => {
      const [data, error] = await get<T>(url);
      data && setState(data);
      error && setErr(err);
      setLoading(false);
    })();
  }, []);

  return { state, loading, err };
}

export default useFetch;
