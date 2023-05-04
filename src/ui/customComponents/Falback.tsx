import { ClipLoader } from 'react-spinners';
import { createPortal } from 'react-dom';

export default function Fallback() {
  const backdropNode = document.getElementById('backdrop-root');
  const portalNode = document.getElementById('modal-root');
  return (
    <>
      {/* {createPortal(
        <div className="naxatw-w-screen naxatw-h-screen naxatw-bg-opacity-20 naxatw-bg-red-400  naxatw-z-[100]"></div>,
        backdropNode,
      )} */}
      {createPortal(
        <div className="naxatw-text-6xl naxatw-text-red-500 naxatw-flex naxatw-flex-col naxatw-justify-center naxatw-items-center naxatw-w-screen naxatw-h-screen naxatw-gap-2 naxatw-bg-opacity-30 naxatw-z-[1000]">
          <ClipLoader color="#000000" speedMultiplier={2} size={70} />
          <h4 className="naxatw-text-2xl naxatw-text-gray-500">Loading...</h4>
        </div>,
        portalNode,
      )}
    </>
    // <div className="naxatw-w-full naxatw-h-full naxatw-bg-[#F6F8FB] naxatw-bg-opacity-30 naxatw-flex naxatw-justify-center naxatw-items-center">
    //   <CircleLoader color="#808080" speedMultiplier={3} />
    // </div>
  );
}
