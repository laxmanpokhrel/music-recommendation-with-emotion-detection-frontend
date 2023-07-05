import FormRow from '@Atoms/FormRow';
import { Button } from '@Atoms/radixComponents/Button';
import useForm from '@Hooks/useForm';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import FormControl from '@Templates/FormControl';
import { UploadMusiVakidation } from '@Validation/index';
import { postInterceptor } from './_lib_';

function UploadMusic() {
  const { handleSubmit, register } = useForm({
    initialValues: { title: '', artist_name: '', thumbnail: '' },
    validationSchema: UploadMusiVakidation,
    postInterceptor,
  });
  return (
    <div className="w-full h-[70vh] pt-8">
      <div className="content m-auto w-[50%] h-full flex flex-col gap-4">
        <h4>Upload Music</h4>
        <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
          <div className="form-controls flex flex-col gap-3 ">
            <FormControl controlType="input" type="text" label="Music Title" required {...register('title')} />
            <FormControl controlType="input" type="text" label="Album" required {...register('album')} />
            <FormControl controlType="input" type="number" label="Duration" required {...register('duration')} />
            <FormRow>
              <FormControl controlType="input" type="text" label="Singer" required {...register('singer')} />
              <FormControl controlType="input" type="text" label="Writer" required {...register('writer')} />
              <FormControl controlType="input" type="text" label="Composer" required {...register('composer')} />
            </FormRow>
            <FormRow>
              <FormControl
                controlType="input"
                type="text"
                label="Genre"
                required
                {...register('genre')}
                className="flex-1"
              />
              <FormControl
                controlType="input"
                type="text"
                label="Keywords"
                required
                {...register('keywords')}
                className="flex-1"
              />
            </FormRow>
            <FormControl controlType="input" type="text" label="Lyrics" required {...register('lyrics')} />
            <FormRow>
              <FormControl
                controlType="upload"
                label="Thumbnail"
                required
                {...register('thumbnail')}
                className="flex-1"
              />
              <FormControl controlType="upload" label="Music" required {...register('music')} className="flex-1" />
            </FormRow>
            <FormControl
              controlType="radio"
              label="Is Published"
              options={[
                { value: true, label: 'Published' },
                { value: false, label: 'Not Published' },
              ]}
              required
              choose="value"
              {...register('isPublished')}
            />
            <FormControl
              controlType="input"
              type="date"
              label="Is Published"
              options={[
                { value: true, label: 'Published' },
                { value: false, label: 'Not Published' },
              ]}
              required
              choose="value"
              {...register('releaseDate')}
            />
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
export default hasErrorBoundary(UploadMusic);
