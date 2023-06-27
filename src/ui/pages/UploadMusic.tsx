import { Button } from '@Atoms/radixComponents/Button';
import useForm from '@Hooks/useForm';
import FormControl from '@Templates/FormControl';
import { TestFormValidation } from '@Validation/__test__/TestFormValidation';

export default function UploadMusic() {
  const { handleSubmit, register } = useForm({
    initialValues: { title: '', artist_name: '', thumbnail: '' },
    validationSchema: TestFormValidation,
  });

  return (
    <div className="w-full h-[70vh] pt-8">
      <div className="content m-auto w-[50%] h-full flex flex-col gap-4">
        <h4>Upload Music</h4>
        <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
          <div className="form-controls flex flex-col gap-3 ">
            <FormControl controlType="input" type="text" label="Music Title" required {...register('title')} />
            <FormControl controlType="input" type="text" label="Artist Name" required {...register('artist_name')} />
            <FormControl controlType="input" type="text" label="Thumbnail" required {...register('thumbnail')} />
          </div>
          <div className="form-actions">
            <Button type="submit" variant="primary">
              Upload
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
