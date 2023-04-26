import Project from "@Models/Project";
import Icon from "@Atoms/Icon";
import Image from "@Atoms/Image";

interface IProjectCardProps {
  data: Project;
}

export default function ProjectCard({ data }: IProjectCardProps): JSX.Element {
  return (
    <div className="naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-p-2 naxatw-bg-gray-200 naxatw-rounded-xl">
      <Image src={data.photo} alt={data.title} aspectRation="auto" />
      <div className="title">
        <span className="naxatw-font-bold naxatw-text-sm">{data.title}</span>
      </div>
      <Icon iconName="map" />
    </div>
  );
}
