import { ClipLoader } from 'react-spinners';
import Portal from '@Molecules/Portal';

interface IFallbackProps {
  overlayComponent?: any;
}
export default function Fallback({ overlayComponent }: IFallbackProps) {
  
  return (
    <Portal
      overlayComponent={
        <div className="naxatw-flex naxatw-justify-center naxatw-items-center naxatw-flex-col naxatw-gap-2">
          <ClipLoader color="#000000" speedMultiplier={2} size={70} />
          <h4 className="naxatw-text-2xl naxatw-text-black naxatw-font-extrabold">Loading...</h4>
        </div>
      }
    />
  );
}

{
  /* <>
      {backdropNode
        ? createPortal(
            <div className="naxatw-w-screen naxatw-h-screen naxatw-bg-black naxatw-bg-opacity-50 naxatw-z-10 naxatw-backdrop-blur-lg naxatw-fixed naxatw-top-0 naxatw-left-0"></div>,
            backdropNode,
          )
        : null}
      {portalNode
        ? createPortal(
            <div className="naxatw-fixed naxatw-top-1/2 naxatw-left-1/2 naxatw-w-fit naxatw-h-fit naxatw-z-20">
              <div className="naxatw-text-6xl naxatw-text-red-500 naxatw-flex naxatw-flex-col naxatw-justify-center naxatw-items-center naxatw-gap-2 naxatw-bg-opacity-30 naxatw-z-[1000] naxatw-h-[50vh] naxatw-w-[50vh] naxatw-absolute naxatw-top-1/2 naxatw-left-1/2 -naxatw-translate-x-1/2 naxatw-translate-y-1/2">
              <ClipLoader color="#000000" speedMultiplier={2} size={70} />
              <h4 className="naxatw-text-2xl naxatw-text-white">Loading...</h4>
              </div>
            </div>,
            portalNode,
          )
        : null}
    </> */
}

// <div className="naxatw-w-full naxatw-h-full naxatw-bg-[#F6F8FB] naxatw-bg-opacity-30 naxatw-flex naxatw-justify-center naxatw-items-center">
//   <CircleLoader color="#808080" speedMultiplier={3} />
// </div>
