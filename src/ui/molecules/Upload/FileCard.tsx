/* eslint-disable no-unused-vars */
// import { removeComponentAnimation } from '@Animations/index';
import Icon from '@Atoms/Icon';
import { Button } from '@Atoms/radixComponents/Button';
import { IDivProps, IFileDataObject } from '@Schemas/interfaces';
import { cn } from '@Utils/index';
import { motion } from 'framer-motion';

interface IFileCardProps extends IDivProps {
  file: IFileDataObject;
  handleFileDelete: (x: any) => void;
  index?: number;
}

export default function FileCard({ file, className, handleFileDelete, index = 0 }: IFileCardProps) {
  return (
    <div className="naxatw-overflow-hidden naxatw-rounded-lg naxatw-transition-all naxatw-duration-500">
      <motion.div
        // {...removeComponentAnimation}
        initial={{ opacity: 0, transform: 'translateX(-50%)' }}
        animate={{ opacity: 1, transform: 'translateX(0%)' }}
        exit={{ opacity: 1, transform: 'translateX(-100%)', background: '#EFBDBD', transition: { delay: 0 } }}
        transition={{ duration: 0.2, ease: 'easeOut', delay: index * 0.1 }}
        className={cn(
          'naxatw-flex naxatw-bg-white naxatw-justify-between naxatw-items-center naxatw-border naxatw-border-gray-300 naxatw-px-3 naxatw-py-2 naxatw-rounded-lg naxatw-w-full',
          className,
        )}
      >
        <div className="info naxatw-flex naxatw-gap-3 naxatw-flex-1">
          <Icon
            iconName="description"
            className="naxatw-rounded-full naxatw-p-2 naxatw-text-blue-500 naxatw-bg-teal-green-50 naxatw-border naxatw-border-gray-300"
          />
          <div className="description naxatw-flex naxatw-justify-center naxatw-items-center">
            <p className="naxatw-body-md naxatw-text-gray-800">{file.name}</p>
            {!file.fileObject ? <p className="naxatw-body-sm naxatw-text-gray-600"> {file.name}</p> : null}
          </div>
        </div>
        <div className="actions naxatw-flex naxatw-justify-center naxatw-items-center naxatw-gap-3">
          {!file.fileObject ? (
            <Button type="button" variant="link" className="naxatw-font-bold !naxatw-px-0">
              View&nbsp;Document
            </Button>
          ) : null}
          {!file.fileObject ? (
            <Button type="button" variant="icon-primary" size="sm-icon">
              <Icon iconName="download" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
            </Button>
          ) : null}

          <Button type="button" variant="icon-primary" size="sm-icon" onClick={() => handleFileDelete(file)}>
            <Icon iconName="delete" className="naxatw-p-0 naxatw-m-0 naxatw-text-other-red" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
