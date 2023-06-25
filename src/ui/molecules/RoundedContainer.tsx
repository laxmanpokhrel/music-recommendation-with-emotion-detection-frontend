/* eslint-disable react/jsx-props-no-spreading */
import { HtmlHTMLAttributes, ReactNode, forwardRef } from 'react';

interface IRoundedContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}
// ! ---------------------------------------------- !//
// The forwardRef function is used when you
// want to forward a ref from a parent component
// to a child component that is implemented as
// a functional component.It allows you to pass
// the ref along so that it can be accessed
// and used on the underlying DOM element or child component
// ! ---------------------------------------------- !//
// * Since this component also can take refrence we have to forward that ref to the child container. If we fail to forward the ref we wont be able to access the div inside it.

const RoundedContainer = forwardRef<HTMLDivElement, IRoundedContainerProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <div
        ref={ref}
        className={`laxutw-rounded-[1.25rem]  laxutw-w-fit laxutw-h-fit laxutw-transition-all laxutw-duration-200 ${className}`}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

export default RoundedContainer;
