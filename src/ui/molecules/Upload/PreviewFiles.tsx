/* eslint-disable no-unused-vars */
import { IFileDataObject } from '@Schemas/interfaces';
import { AnimatePresence } from 'framer-motion';
import FileCard from './FileCard';

interface IPreviewFilesProps {
  files: IFileDataObject[];
  handleFileDelete: (x: any) => void;
}
export default function PreviewFiles({ files, handleFileDelete }: IPreviewFilesProps) {
  if (files)
    return (
      <div className="laxutw-flex laxutw-flex-col laxutw-gap-1 ">
        <AnimatePresence>
          {Array.from(files).map((file, index) => (
            <FileCard key={`${file.name}`} file={file} handleFileDelete={handleFileDelete} index={index} />
          ))}
        </AnimatePresence>
      </div>
    );
  return <p> No Files Selected</p>;
}
