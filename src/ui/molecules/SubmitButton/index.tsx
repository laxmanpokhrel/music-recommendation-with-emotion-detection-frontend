/* eslint-disable no-nested-ternary */
import Icon from '@Atoms/Icon';
import { useEffect, useState } from 'react';
import { Button, ButtonProps } from '@Atoms/radixComponents/Button';
import ErrorLabel from '@Molecules/ErrorLabel';
import { IFormState } from '@Schemas/interfaces';
import { SyncLoader } from 'react-spinners';

interface ISubmitButtonProps extends ButtonProps {
  state: Partial<IFormState>;
  error: Error | null;
  isSubmitting: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export default function SubmitButton({
  state,
  children,
  error,
  isError,
  isSubmitting,
  isSuccess,
  ...props
}: ISubmitButtonProps) {
  const [tickIsVisible, setTickIsVisible] = useState(false);
  useEffect(() => {
    let timeoutInstance: any;
    if (isSuccess) {
      setTickIsVisible(true);
      timeoutInstance = setTimeout(() => {
        setTickIsVisible(false);
      }, 5000);
    }

    return () => clearTimeout(timeoutInstance);
  }, [isSuccess]);
  return (
    <div className="naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center ">
      <Button
        {...props}
        type="submit"
        variant={state.formHasError ? 'ghost' : 'primary'}
        className="naxatw-min-w-[4.75rem] naxatw-flex naxatw-gap-3"
      >
        {children}&nbsp;
        {isSubmitting ? (
          <SyncLoader
            color="#ffffff"
            cssOverride={{ margin: '2px' }}
            loading
            margin={0.5}
            size={8}
            speedMultiplier={1.5}
          />
        ) : null}
        {tickIsVisible ? <Icon iconName="check" /> : null}
      </Button>
      {error ? <ErrorLabel message="Error Submiting Form." /> : null}
    </div>
  );
}
