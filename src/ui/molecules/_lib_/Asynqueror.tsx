import { ReactNode } from 'react';
import { UseQueryResult, UseMutationResult } from 'react-query';
import DefaultEmptyMolecule from './DefaultEmptyMolecule';
import DefaultErrorMolecule from './DefaultErrorMolecule';
import DefaultSkeleton from './DefaultSkeleton';

interface IAsynquerorProps {
  children?: ReactNode;
  watch: Partial<UseQueryResult<any, Error> | UseMutationResult<any, Error, void, unknown>>;
  skeleton?: JSX.Element | JSX.IntrinsicElements;
  emptyMolecule?: JSX.Element;
  errorMolecule?: JSX.Element;
  paginated?: boolean;
}

/**
 * This component will handle all the states that it is assigned to watch to. For example it can handle loading state by loading the default skeleton.
 * @param skeleton has to be provided by writing the skeleton component manually
 * @param watch the properties that is to watch
 * @returns `JSX.Element`
 */
export default function Asynqueror({
  watch,
  children,
  skeleton = <DefaultSkeleton />,
  emptyMolecule = <DefaultEmptyMolecule />,
  errorMolecule,
}: IAsynquerorProps) {
  const { data, isLoading, isError, error } = watch;
  if (isError) {
    if (errorMolecule) return errorMolecule;
    return <DefaultErrorMolecule errorMessage={error?.message} />;
  }
  if (isLoading) return <>{skeleton}</>;
  if (!data || !data.length) return emptyMolecule;
  return <>{children}</>;
}
