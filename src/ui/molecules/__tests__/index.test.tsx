import Icon from '@Atoms/Icon';
import Image from '@Atoms/Image';

export default function TestProjectCard() {
  return (
    <div className="naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-p-2 naxatw-bg-gray-200 naxatw-rounded-xl">
      <Image
        src="https://i.pinimg.com/originals/bd/d3/2e/bdd32ef64fd6ff4db2b6e971acc1fe41.jpg"
        alt="Beautiful Women"
        aspectRation="auto"
      />
      <div className="title">
        <span className="naxatw-font-bold naxatw-text-sm">Beautiful women. Beautiful women. Beautiful women.</span>
      </div>
      <Icon iconName="map" />
    </div>
  );
}
