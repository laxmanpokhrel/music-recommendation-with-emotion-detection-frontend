/* eslint-disable no-nested-ternary */
import Icon from '@Atoms/Icon';
import { useEffect, useState } from 'react';
import { Button, ButtonProps } from '@Atoms/radixComponents/Button';
// import ErrorLabel from '@Molecules/ErrorLabel';
import { SyncLoader } from 'react-spinners';
import { AnimatePresence, motion } from 'framer-motion';
import { IFormState } from '@Schemas/interfaces';
import RoundedContainer from '@Molecules/RoundedContainer';

interface ISubmitButtonProps extends ButtonProps, IFormState {
  disableTillValid?: boolean;
}

export default function SubmitButton({
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
      }, 3000);
    }

    return () => clearTimeout(timeoutInstance);
  }, [isSuccess]);

  return (
    <div className="naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-3 ">
      <Button
        {...props}
        type="submit"
        variant={isSubmitting ? 'ghost' : 'primary'}
        className="naxatw-min-w-[4.75rem] naxatw-flex naxatw-gap-3 naxatw-overflow-hidden naxatw-transition-all naxatw-duration-500 naxatw-ease-in-out"
      >
        {tickIsVisible ? 'Success' : children}&nbsp;
        <AnimatePresence>
          {isSubmitting ? (
            <motion.div
              initial={{
                background: 'blue',
              }}
              animate={{ background: 'none' }}
              exit={{ background: 'black' }}
              className="loader"
            >
              <SyncLoader
                color="#000000"
                cssOverride={{ margin: '2px' }}
                loading
                margin={0.5}
                size={8}
                speedMultiplier={1.5}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        {tickIsVisible ? <Icon iconName="check" /> : null}
      </Button>
      {isError ? (
        <RoundedContainer className="naxatw-bg-red-400 naxatw-p-2 naxatw-w-full naxatw-text-center naxatw-text-white">
          {error || 'Something is not right.'}
        </RoundedContainer>
      ) : null}
    </div>
  );
}
