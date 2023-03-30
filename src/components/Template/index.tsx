import { ButtonHTMLAttributes, ReactNode } from "react";

// '?' means the prop is optional
// ButtonHTMLAttributes<HTMLButtonElement> is an interface in React that defines the standard HTML attributes that can be used with a button element.
// interface TemplateProps extends ButtonHTMLAttributes<HTMLButtonElement> {
interface IProps {
  id?: any;
  name?: string;
  children?: ReactNode;
}

export default function Template(props: IProps) {
  return <div>This is a template component. {props.name}</div>;
}
