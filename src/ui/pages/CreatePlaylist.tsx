import { postService } from '@Api/services';
import { dropDownWrapper } from '@Api/wrappers';
import { Button } from '@Atoms/radixComponents/Button';
import { Proxies } from '@Constants/Proxies';
import useForm from '@Hooks/useForm';
import FormControl from '@Templates/FormControl';
import { MusicService } from '@Ui/_lib_';
import { TestFormValidation } from '@Validation/__test__/TestFormValidation';

export default function CreatePlaylist() {
  const { data: musicData } = MusicService.fetchData({
    queryParams: {
      select: dropDownWrapper,
    },
  });
  const uploadPlaylistInterceptor = async (data: any) => {
    try {
      const { thumbnail, ...rest } = data;

      const formData = new FormData();
      formData.append('file', thumbnail[0].fileObject);
      formData.append('type', 'thumbnail');

      const uploadedThumbnailResponse = await postService(true, Proxies.API_URL, '/media/upload', formData, true);
      await postService(true, Proxies.API_URL, '/playlists/create', {
        ...rest,
        thumbnail: uploadedThumbnailResponse.data.id.toString(),
      });

      return true;
    } catch (err) {
      return false;
    }
  };
  const { register, handleSubmit } = useForm({
    initialValues: { name: '', thumbnail: '', tag: '', isPrivate: false, musics: [] },
    validationSchema: TestFormValidation,
    postDataInterceptor: ({ tag, isPrivate, musics, ...rest }) => ({
      tag: [tag],
      isPrivate: !!isPrivate,
      musics: musics.map((item: any) => item.toString()),
      ...rest,
    }),
    postInterceptor: uploadPlaylistInterceptor,
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="home-page-template text-lg w-2/5 flex flex-col  gap-3 m-auto h-full  pt-10"
    >
      <FormControl controlType="input" type="text" label="Playlist Name" {...register('name')} />
      <FormControl controlType="dropDown" label="Songs" multiple options={musicData || []} {...register('musics')} />
      <FormControl controlType="upload" label="Thumbnail" {...register('thumbnail')} />
      <FormControl controlType="input" type="text" label="Tags" {...register('tag')} />
      <FormControl
        controlType="radio"
        label="Is Published"
        options={[
          { value: 'true', label: 'Published' },
          { value: 'false', label: 'Not Published' },
        ]}
        required
        choose="value"
        {...register('isPrivate')}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
