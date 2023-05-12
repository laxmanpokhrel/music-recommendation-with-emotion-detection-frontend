import Icon from '@Atoms/Icon';

export default function CollapseButton() {
  return (
    <button
      type="button"
      className=" naxatw-w-8 naxatw-h-8 naxatw-flex naxatw-justify-center naxatw-items-center naxatw-rounded-2xl naxatw-bg-gray-200 naxatw-shadow-lg hover:bg-green"
    >
      <div className="cover naxatw-w-full naxatw-h-full naxatw-overflow-hidden naxatw-flex naxatw-justify-center naxatw-items-center hover:naxatw-animate-pulse naxatw-ease-out naxatw-duration-100">
        <Icon iconName="arrow_forward_ios" iconStyle="naxatw-text-lg" />
      </div>
    </button>
  );
}
