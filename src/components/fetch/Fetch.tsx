import { useFetch } from '../../hooks/useFetch';

interface FetchProps<TData> {
  url: string;
  loadingFallback: JSX.Element;
  onError(error: any): JSX.Element;
  onSuccess(data: TData): JSX.Element;
}

export default function Fetch<T>({
  url,
  onSuccess: renderSuccess,
  loadingFallback,
  onError: renderError,
}: FetchProps<T>) {
  const { data, error } = useFetch<T>({ url });
  if (!data) return loadingFallback;
  if (error) return renderError(error);
  return renderSuccess(data);
}
