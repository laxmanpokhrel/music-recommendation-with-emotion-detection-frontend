import { ReactNode } from 'react';
import { ClipLoader } from 'react-spinners';
import { createPortal } from 'react-dom';

interface IPortalProps {
  overlayComponent: ReactNode;
}

export default function Portal({ overlayComponent }: IPortalProps) {
  const backdropNode = document.getElementById('backdrop-root');
  const portalNode = document.getElementById('overlay-root');
  return (
    <>
      {backdropNode
        ? createPortal(
            <div className="naxatw-w-screen naxatw-h-screen naxatw-bg-white naxatw-bg-opacity-50 naxatw-z-10 naxatw-backdrop-blur-lg naxatw-fixed naxatw-top-0 naxatw-left-0"></div>,
            backdropNode,
          )
        : null}

      {portalNode
        ? createPortal(
            <div className="naxatw-fixed naxatw-top-1/2 naxatw-left-1/2 -naxatw-translate-y-1/2 naxatw-w-fit naxatw-h-fit naxatw-z-20">
              {overlayComponent}
            </div>,
            portalNode,
          )
        : null}
    </>
  );
}
