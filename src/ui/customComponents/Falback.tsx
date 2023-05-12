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
