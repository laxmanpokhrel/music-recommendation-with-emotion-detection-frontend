/* eslint-disable no-unused-vars */
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import { IDivProps } from '@Schemas/interfaces';
import { createPortal } from 'react-dom';
import { useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { backDropAnimation } from '@Animations/index';

/**
 * This is a functional component called `PortalTemplate` that takes in a prop called `children` of
 * type `IDivProps`. It creates two variables `backdropNode` and `portalNode` by getting the elements
 * with ids `backdrop-root` and `overlay-root` respectively. */

function PortalTemplate({ children }: IDivProps) {
  const backdropNode = document.getElementById('backdrop-root');
  const portalNode = document.getElementById('overlay-root');
  useLayoutEffect(() => {});

  useEffect(() => {
    const { body } = document;
    body.style.overflow = 'hidden';
    body.style.paddingRight = '17px';

    return () => {
      document.body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    };
  }, []);

  return (
    <>
      {backdropNode
        ? createPortal(
            <motion.div
              {...backDropAnimation}
              className="naxatw-w-screen naxatw-h-screen naxatw-bg-black naxatw-bg-opacity-50 naxatw-z-10  naxatw-fixed naxatw-top-0 naxatw-left-0"
            />,
            backdropNode,
          )
        : null}
      {portalNode
        ? createPortal(
            <div className="naxatw-fixed naxatw-top-0 naxatw-left-0 naxatw-w-screen naxatw-h-screen naxatw-bg-opacity-0 naxatw-z-20">
              <div className="overlay-container naxatw-relative naxatw-w-full naxatw-h-full ">{children}</div>
            </div>,
            portalNode,
          )
        : null}
    </>
  );
}
export default hasErrorBoundary(PortalTemplate);
