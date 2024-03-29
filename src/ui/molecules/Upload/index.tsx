import Icon from '@Atoms/Icon';
import { IFileDataObject, IRegisterProps } from '@Schemas/interfaces';
import { cn } from '@Utils/index';
import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PreviewFiles from './PreviewFiles';

interface IUploadProps extends Partial<IRegisterProps> {}

export default function Upload({
  name,
  id = 'input-form-control',
  onChange,
  className,
  multiple = true,
  bindvalue,
}: IUploadProps) {
  const [files, setFiles] = useState<IFileDataObject[]>(bindvalue);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles: IFileDataObject[] = [];

    if (e.target.files)
      //! this is heavy weight looping mechanism in react which is prohibited by eslint, but here it is disabled for a work around
      // eslint-disable-next-line no-restricted-syntax
      for (const file of e.target.files) {
        uploadedFiles.push({ id: uuidv4(), name: file.name, fileObject: file });
      }
    setFiles(uploadedFiles);
    if (onChange) onChange(uploadedFiles);
  };

  const handleFileDelete = (fileToDelete: File) => {
    if (files) {
      const updatedFiles = Array.from(files).filter((file: any) => file !== fileToDelete);
      setFiles(updatedFiles);
    }
  };

  return (
    <div className={cn('w-full flex flex-col transition-all duration-100 ease-in-out ', className)}>
      <label
        htmlFor={id}
        className={`${
          files?.length ? 'text-teal-green-400 ' : 'text-gray-400 '
        } flex gap-1 font-bold cursor-pointer p-2`}
      >
        <Icon iconName="upload" />
        <p>Upload</p>
        <input
          key={uuidv4()}
          type="file"
          id={id}
          className="hidden"
          name={name}
          onChange={handleFileChange}
          multiple={multiple}
        />
      </label>
      {files ? PreviewFiles({ files, handleFileDelete }) : null}
    </div>
  );
}
