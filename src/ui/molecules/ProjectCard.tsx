import Project from '@Schemas/models/Project';
import Icon from '@Atoms/Icon';
import Image from '@Atoms/Image';
import { Skeleton } from '@Atoms/skeleton';
import ErrorBoundary from './ErrorBoundary';

interface IProjectCardProps {
  data: Project;
}

export default function ProjectCard({ data }: IProjectCardProps): JSX.Element {
  return (
    <ErrorBoundary>
      <div className="naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-p-2 naxatw-bg-gray-200 naxatw-rounded-xl">
        <Image src={data.photo} alt={data?.title} aspectRation="auto" />
        <div className="title naxatw-flex naxatw-flex-col naxatw-gap-2">
          <span className="naxatw-font-bold naxatw-text-sm">{data.title}</span>
          { rama}
          <small>Duration: {data.projectDuration()} months</small>
        </div>
        <Icon iconName="map" />
      </div>
    </ErrorBoundary>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="naxatw-w-full naxatw-h-full naxatw-flex naxatw-flex-col naxatw-gap-4 naxatw-p-2 naxatw-rounded-xl">
      <Skeleton className="naxatw-h-[5rem] naxatw-w-full naxatw-bg-gray-300" />
      <Skeleton className="naxatw-h-4 naxatw-w-full naxatw-bg-gray-300" />
      <Skeleton className="naxatw-h-4 naxatw-w-1/5 naxatw-bg-gray-300" />
    </div>
  );
}
