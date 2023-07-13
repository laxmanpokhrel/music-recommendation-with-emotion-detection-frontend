/* eslint-disable react-hooks/exhaustive-deps */
import FormRow from '@Atoms/FormRow';
import useForm from '@Hooks/useForm';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import FormControl from '@Templates/FormControl';
import { UploadMusiValidation } from '@Validation/index';
import SubmitButton from '@Molecules/SubmitButton';
import { useParams } from 'react-router-dom';
import { MusicService } from '@Ui/_lib_';
import { useEffect } from 'react';
import { postInterceptor } from './_lib_';

function UploadMusic() {
  const { musicId } = useParams();

  const { data: musicData } = MusicService.fetchSingleData(musicId || '', {
    enabled: !!musicId,
    select: (data) => {
      const { music, thumbnail, ...rest } = data.data;
      const convertedData = { ...rest, thumbnail: [thumbnail], music: [music] };
      return convertedData;
    },
  });

  const { handleSubmit, register, formState, setBindValues } = useForm({
    initialValues: musicId ? musicData : { title: '', artist_name: '', thumbnail: '' },
    validationSchema: UploadMusiValidation,
    postInterceptor,
  });

  useEffect(() => {
    if (musicData) setBindValues(musicData);
  }, [musicData]);
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
              controlType="dropDown"
              label="Song Type"
              {...register('type')}
              required
              options={[
                { id: 1, label: 'Happy', value: 'HAPPY' },
                { id: 2, label: 'Sad', value: 'SAD' },
                { id: 3, label: 'Neutral', value: 'NEUTRAL' },
                { id: 4, label: 'None', value: 'NONE' },
              ]}
              choose="value"
            />
            <FormControl
              controlType="radio"
              label="Is Published"
              options={[
                { value: 'true', label: 'Published' },
                { value: 'false', label: 'Not Published' },
              ]}
              required
              choose="value"
              {...register('isPublished')}
            />
            <FormControl
              controlType="input"
              type="date"
              label="Release Date"
              required
              choose="value"
              {...register('releaseDate')}
            />
          </div>
          <div className="form-actions">
            <SubmitButton {...formState}>{musicId ? 'Update' : 'Upload'}</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
export default hasErrorBoundary(UploadMusic);
