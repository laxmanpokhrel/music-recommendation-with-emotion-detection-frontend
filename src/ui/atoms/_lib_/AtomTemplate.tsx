// import IAtom from "@Interface/ui-libs/IAtom";
import { Children, isValidElement, ReactElement, ReactNode } from 'react';

interface IAtom {
  children: ReactNode;
}

const isPureHtmlTag = (child: ReactNode): child is ReactElement<keyof HTMLElementTagNameMap> => {
  return (
    typeof child === 'string' ||
    typeof child === 'number' ||
    (isValidElement(child) && typeof (child as ReactElement).type === 'string')
  );
};

/**
 ** This Component is not in use for now!
 */
function AtomTemplate({ children }: IAtom) {
  const pureHtmlTags = Children.toArray(children).filter(isPureHtmlTag);
  return <>{pureHtmlTags}</>;
}
export default AtomTemplate;
