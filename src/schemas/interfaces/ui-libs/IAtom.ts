import { ReactElement } from "react";

// type HTMLTags = keyof ReactHTML;
// type HTMLTags = "p" | "span" | "div";

type HTMLTags = keyof JSX.IntrinsicElements;
export default interface IAtom {
  children: ReactElement<HTMLTags> | ReactElement<HTMLTags>[];
}
