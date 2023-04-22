import IAtom from "@Interface/IAtom";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

// 1. HTMLAttributes provides all the possible attributes that a particular tag can have. I this case we need all the possible attributes that a HTMLDivElement will have
// 2. We omit the 'children' attribute because we have our own children type  at IAtom.
// 3. if we didn't omit the attribute, there will be the conflict between the default provided 'children' attribute and our 'children atttibute at IAtom

interface IProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children">,
    PropsWithChildren<IAtom> {
  className?: string;
}

export default function AtomTemplate({
  children,
  className,
  ...rest
}: IProps): JSX.Element {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
