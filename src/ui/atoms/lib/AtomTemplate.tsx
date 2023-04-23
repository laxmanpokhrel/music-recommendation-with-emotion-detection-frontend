// import IAtom from "@Interface/ui-libs/IAtom";
import {
  Children,
  FC,
  HTMLAttributes,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  ReactPortal,
  ComponentPropsWithoutRef,
  ComponentType,
  Ref,
  JSXElementConstructor,
} from "react";

// 1. HTMLAttributes provides all the possible attributes that a particular tag can have. I this case we need all the possible attributes that a HTMLDivElement will have
// 2. We omit the 'children' attribute because we have our own children type  at IAtom.
// 3. if we didn't omit the attribute, there will be the conflict between the default provided 'children' attribute and our 'children atttibute at IAtom

// children: ReactElement<HTMLTags> | ReactElement<HTMLTags>[];

// type HTMLTags = keyof HTMLElementTagNameMap;
// console.log("😎 - file: AtomTemplate.tsx:26 - HTMLTags:");

// type ChildrebKeys = keyof ReactNode;
// interface IAtom {
//   type: string;
// }
// type Props = {
//   children: React.ReactElement<keyof HTMLElementTagNameMap>[]; // Only accept children that are pure HTML tags
// };

// const isPureHtmlTag = (
//   child: React.ReactNode
// ): child is React.ReactElement<keyof HTMLElementTagNameMap> => {
//   return (
//     typeof child === "string" ||
//     typeof child === "number" ||
//     (isValidElement(child) &&
//       typeof (child as React.ReactElement).type === "string")
//   );
// };

// type ChildrenType = ComponentPropsWithoutRef<"button">;
// console.log(ChildrenType.toString());
// interface IProps extends HTMLAttributes<HTMLElement> {
//   // children: {type:};
// }

// interface IAtomChild {
//   $$typeof: symbol;
//   type: string | ComponentType<any>;
//   key: string | number | null | undefined;
//   ref: Ref<any> | null | undefined;
//   props: PropsWithChildren<any>;
//   _owner: ReactNode | null | undefined;
//   _store: Object | null | undefined;
// }
// interface IAtomChild {
//   $$typeof?: symbol;
//   type?: string;
//   key?: string | number | null | undefined;
//   ref?: Ref<any> | null | undefined;
//   props?: PropsWithChildren<any>;
//   _owner?: ReactNode | null | undefined;
//   _store?: Object | null | undefined;
// }

// interface ReactAtomElement<P = any, T extends string> {
//   type: T;
//   props: P;
//   key: Key | null;
// }

interface IAtom {
  children: ReactNode;
}

const isPureHtmlTag = (
  child: ReactNode
): child is ReactElement<keyof HTMLElementTagNameMap> => {
  return (
    typeof child === "string" ||
    typeof child === "number" ||
    (isValidElement(child) && typeof (child as ReactElement).type === "string")
  );
};

const AtomTemplate = ({ children }: IAtom) => {
  const pureHtmlTags = Children.toArray(children).filter(isPureHtmlTag);
  return <>{pureHtmlTags}</>;
};
export default AtomTemplate;
