import { SyncLoader } from 'react-spinners';
import PortalTemplate from '@Templates/PortalTemplate';

export default function Fallback() {
  return (
    <PortalTemplate>
      <div className="laxutw-flex laxutw-justify-center laxutw-items-center laxutw-flex-col laxutw-gap-4 laxutw-absolute laxutw-top-1/2 laxutw-left-1/2 -laxutw-translate-x-1/2 -laxutw-translate-y-1/2">
        <SyncLoader color="#000000" speedMultiplier={2} size={20} margin={4} />
        {/* <h4 className="laxutw-text-2xl laxutw-text-black laxutw-font-extrabold">Loading...</h4> */}
      </div>
    </PortalTemplate>
  );
}
