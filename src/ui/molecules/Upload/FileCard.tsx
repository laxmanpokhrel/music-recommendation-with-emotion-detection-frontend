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
    <div className="overflow-hidden rounded-lg transition-all duration-500">
      <motion.div
        // {...removeComponentAnimation}
        initial={{ opacity: 0, transform: 'translateX(-50%)' }}
        animate={{ opacity: 1, transform: 'translateX(0%)' }}
        exit={{ opacity: 1, transform: 'translateX(-100%)', background: '#EFBDBD', transition: { delay: 0 } }}
        transition={{ duration: 0.2, ease: 'easeOut', delay: index * 0.1 }}
        className={cn(
          'flex bg-white justify-between items-center border border-gray-300 px-3 py-2 rounded-lg w-full',
          className,
        )}
      >
        <div className="info flex gap-3 flex-1">
          <Icon
            iconName="description"
            className="rounded-full p-2 text-blue-500 bg-teal-green-50 border border-gray-300"
          />
          <div className="description flex justify-center items-center">
            {!file.fileObject ? <p className="body-md text-gray-800"> {file.name}</p> : null}
          </div>
        </div>
        <div className="actions flex justify-center items-center gap-3">
          {/* {!file.fileObject ? (
            <Button type="button" variant="link" className="font-bold !px-0">
              View&nbsp;Document
            </Button>
          ) : null} */}
          {/* {!file.fileObject ? (
            <Button type="button" variant="icon-primary" size="sm-icon">
              <Icon iconName="download" className="p-0 m-0 text-gray-600" />
            </Button>
          ) : null} */}

          <Button type="button" variant="icon-primary" size="sm-icon" onClick={() => handleFileDelete(file)}>
            <Icon iconName="delete" className="p-0 m-0 text-other-red" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
