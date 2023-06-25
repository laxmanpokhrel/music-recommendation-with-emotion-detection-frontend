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
    <div className="laxutw-overflow-hidden laxutw-rounded-lg laxutw-transition-all laxutw-duration-500">
      <motion.div
        // {...removeComponentAnimation}
        initial={{ opacity: 0, transform: 'translateX(-50%)' }}
        animate={{ opacity: 1, transform: 'translateX(0%)' }}
        exit={{ opacity: 1, transform: 'translateX(-100%)', background: '#EFBDBD', transition: { delay: 0 } }}
        transition={{ duration: 0.2, ease: 'easeOut', delay: index * 0.1 }}
        className={cn(
          'laxutw-flex laxutw-bg-white laxutw-justify-between laxutw-items-center laxutw-border laxutw-border-gray-300 laxutw-px-3 laxutw-py-2 laxutw-rounded-lg laxutw-w-full',
          className,
        )}
      >
        <div className="info laxutw-flex laxutw-gap-3 laxutw-flex-1">
          <Icon
            iconName="description"
            className="laxutw-rounded-full laxutw-p-2 laxutw-text-blue-500 laxutw-bg-teal-green-50 laxutw-border laxutw-border-gray-300"
          />
          <div className="description laxutw-flex laxutw-justify-center laxutw-items-center">
            <p className="laxutw-body-md laxutw-text-gray-800">{file.name}</p>
            {!file.fileObject ? <p className="laxutw-body-sm laxutw-text-gray-600"> {file.name}</p> : null}
          </div>
        </div>
        <div className="actions laxutw-flex laxutw-justify-center laxutw-items-center laxutw-gap-3">
          {!file.fileObject ? (
            <Button type="button" variant="link" className="laxutw-font-bold !laxutw-px-0">
              View&nbsp;Document
            </Button>
          ) : null}
          {!file.fileObject ? (
            <Button type="button" variant="icon-primary" size="sm-icon">
              <Icon iconName="download" className="laxutw-p-0 laxutw-m-0 laxutw-text-gray-600" />
            </Button>
          ) : null}

          <Button type="button" variant="icon-primary" size="sm-icon" onClick={() => handleFileDelete(file)}>
            <Icon iconName="delete" className="laxutw-p-0 laxutw-m-0 laxutw-text-other-red" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
