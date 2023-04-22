import { ReactElement, ReactHTML, ReactNode } from "react";

type HTMLTags = keyof HTMLElementTagNameMap;
interface IAtom {
  children: ReactElement<HTMLTags> | ReactElement<HTMLTags>[];
}

export default IAtom;
