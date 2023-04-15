type Response<T> = {
  error: string | null;
  data: T | null;
};

export default Response;
