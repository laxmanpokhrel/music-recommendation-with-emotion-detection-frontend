import { IDivProps } from '@Interface/IButtonProps';
import { ReactNode } from 'react';
import { UseQueryResult, UseMutationResult } from 'react-query';
import ErrorMolecule from './ErrorMolecule';

interface IAsynqueror extends IDivProps {
  children?: ReactNode;
  watch: Omit<Partial<UseQueryResult<any, Error> | UseMutationResult<any, Error, void, unknown>>, 'data'>;
  skeleton?: JSX.Element | JSX.IntrinsicElements;
}

/**
 * This component will handle all the states that it is assigned to watch to. For example it can handle loading state by loading the default skeleton.
 * @param skeleton has to be provided by writing the skeleton component manually
 * @param watch the properties that is to watch
 *  @returns `JSX.Element`
 */
export default function Asynqueror({ watch, children, skeleton, ...restProps }: IAsynqueror) {
  const { isLoading, isError, error } = watch;
  if (isLoading) return <>{skeleton}</>;
  if (isError) return <ErrorMolecule errorMessage={error?.message} />;
  return <>{children}</>;
}
