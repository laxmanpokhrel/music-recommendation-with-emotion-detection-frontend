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
              className="laxutw-w-screen laxutw-h-screen laxutw-bg-gray-800 laxutw-bg-opacity-20 laxutw-z-10  laxutw-fixed laxutw-top-0 laxutw-left-0"
            />,
            backdropNode,
          )
        : null}
      {portalNode
        ? createPortal(
            <div
              onClick={() => (onClose ? onClose() : null)}
              className="laxutw-fixed laxutw-top-0 laxutw-left-0 laxutw-w-screen laxutw-h-screen laxutw-bg-opacity-0 laxutw-z-20"
            >
              <div className="overlay-container laxutw-relative laxutw-w-full laxutw-h-full ">{children}</div>
            </div>,
            portalNode,
          )
        : null}
    </>
  );
}
export default hasErrorBoundary(PortalTemplate);
