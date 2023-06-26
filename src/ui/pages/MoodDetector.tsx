import { Button } from 'react-day-picker';

export default function MooDetector() {
  return (
    <div className="laxutw-w-full  laxutw-bg-green-400 laxutw-h-[80vh] laxutw-flex laxutw-gap-4 ">
      <div className="camera laxutw-bg-red-100 laxutw-flex-2">
        <iframe
          title="camera"
          className="laxutw-w-full laxutw-h-full"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          // height="500px"
          // width="300px"
        />
      </div>
      <div className="songs laxutw-flex-1">
        {Array.from({ length: 9 }).map(() => (
          <div>This is a song</div>
        ))}
        <Button>See More</Button>
      </div>
    </div>
  );
}
