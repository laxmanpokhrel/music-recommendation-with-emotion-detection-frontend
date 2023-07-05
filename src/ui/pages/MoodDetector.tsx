/* eslint-disable react/no-array-index-key */
import { Button } from '@Atoms/radixComponents/Button';
import { useNavigate } from 'react-router-dom';

export default function MooDetector() {
  const navigate = useNavigate();
  return (
    <div className="w-full  h-[80vh] flex gap-8 p-4">
      <div className="flex-2">
        <iframe title="camera" className="w-full h-full" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
      </div>
      <div className="songs flex-1 flex flex-col gap-4 items-start justify-start">
        {Array.from({ length: 9 }).map((__item, index) => (
          <div key={index}>This is a song</div>
        ))}
        <Button variant="link" className="!px-4 !py-0 !p-0" onClick={() => navigate('/explore-more')}>
          See More
        </Button>
      </div>
    </div>
  );
}
