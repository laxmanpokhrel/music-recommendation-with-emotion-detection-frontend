/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import { IDivProps } from '@Schemas/interfaces';
import { createPortal } from 'react-dom';
import { useLayoutEffect } from 'react';
import { backDropAnimation } from '@Animations/index';
import { motion } from 'framer-motion';

interface IPortalTemplateProps extends Omit<IDivProps, 'onClick'> {
  onClose?: () => void;
}

/**
 * This is a functional component called `PortalTemplate` that takes in a prop called `children` of
 * type `IDivProps`. It creates two variables `backdropNode` and `portalNode` by getting the elements
 * with ids `backdrop-root` and `overlay-root` respectively. */
function PortalTemplate({ children, onClose }: IPortalTemplateProps) {
  const backdropNode = document.getElementById('backdrop-root');
  const portalNode = document.getElementById('overlay-root');
  useLayoutEffect(() => {});

  return (
    <>
      {backdropNode
        ? createPortal(
            <motion.div
              {...backDropAnimation}
              className="w-screen h-screen bg-gray-800 bg-opacity-20 z-10  fixed top-0 left-0"
            />,
            backdropNode,
          )
        : null}
      {portalNode
        ? createPortal(
            <div
              onClick={() => (onClose ? onClose() : null)}
              className="fixed top-0 left-0 w-screen h-screen bg-opacity-0 z-20"
            >
              <div className="overlay-container relative w-full h-full ">{children}</div>
            </div>,
            portalNode,
          )
        : null}
    </>
  );
}
export default hasErrorBoundary(PortalTemplate);
