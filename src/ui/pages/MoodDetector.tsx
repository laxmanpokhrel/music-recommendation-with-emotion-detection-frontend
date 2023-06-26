/* eslint-disable react/no-array-index-key */
import { Button } from '@Atoms/radixComponents/Button';
import { useNavigate } from 'react-router-dom';

export default function MooDetector() {
  const navigate = useNavigate();
  return (
    <div className="laxutw-w-full  laxutw-h-[80vh] laxutw-flex laxutw-gap-8 laxutw-p-4">
      <div className="laxutw-flex-2">
        <iframe
          title="camera"
          className="laxutw-w-full laxutw-h-full"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      </div>
      <div className="songs laxutw-flex-1 laxutw-flex laxutw-flex-col laxutw-gap-4 laxutw-items-start laxutw-justify-start">
        {Array.from({ length: 9 }).map((__item, index) => (
          <div key={index}>This is a song</div>
        ))}
        <Button
          variant="link"
          className="!laxutw-px-4 !laxutw-py-0 !laxutw-p-0"
          onClick={() => navigate('/explore-more')}
        >
          See More
        </Button>
      </div>
    </div>
  );
}
