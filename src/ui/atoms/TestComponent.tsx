import { ReactNode } from "react";
import { fetchProjects } from "@Api/services/projects";
import Game from "@Models/game";
import useCustomQuery from "@Hooks/useCustomQuery";
import { useQuery, UseQueryResult } from "react-query";

// '?' means the prop is optional
// ButtonHTMLAttributes<HTMLButtonElement> is an interface in React that defines the standard HTML attributes that can be used with a button element.
// interface TemplateProps extends ButtonHTMLAttributes<HTMLButtonElement> {

interface IProps {
  id?: any;
  name?: string;
  children?: ReactNode;
}

export default function Template(props: IProps) {
  const { isLoading, data, isError, error } = useCustomQuery<Game>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    enabled: true,
  });

  if (isLoading) return <h5>Loading....</h5>;
  if (isError) return <h5>{error?.message}</h5>;

  return (
    <div>
      {data?.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
      <div> This is a template component. {props.name}</div>
    </div>
  );
}
