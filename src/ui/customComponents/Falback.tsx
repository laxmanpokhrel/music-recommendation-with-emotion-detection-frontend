import { SyncLoader } from 'react-spinners';
import PortalTemplate from '@Templates/PortalTemplate';

export default function Fallback() {
  return (
    <PortalTemplate>
      <div className="flex justify-center items-center flex-col gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SyncLoader color="#000000" speedMultiplier={2} size={20} margin={4} />
        {/* <h4 className="text-2xl text-black font-extrabold">Loading...</h4> */}
      </div>
    </PortalTemplate>
  );
}
