import { ReactNode } from "react";
import { getProjects } from "@Queries/projectQueries";

interface IProps {
  id?: any;
  name?: string;
  children?: ReactNode;
}

export default function Template(props: IProps) {
  const { isError, isLoading, data, error } = getProjects();

  if (isLoading) return <h5>Loading....</h5>;
  if (isError) return <h5>{error?.message}</h5>;

  return (
    <div>
      {data?.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
    </div>
  );
}
