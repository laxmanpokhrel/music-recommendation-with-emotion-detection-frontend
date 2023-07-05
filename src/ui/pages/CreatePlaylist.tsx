import { dropDownWrapper } from '@Api/wrappers';
import useForm from '@Hooks/useForm';
import FormControl from '@Templates/FormControl';
import { MusicService } from '@Ui/_lib_';

export default function CreatePlaylist() {
  const { data: musicData } = MusicService.fetchData({
    queryParams: {
      select: dropDownWrapper,
    },
  });
  const { register } = useForm({ initialValues: { name: '', musics: [] } });
  return (
    <form className="home-page-template text-lg w-2/5 flex flex-col  gap-3 m-auto h-full  pt-10">
      <FormControl controlType="input" type="text" label="Playlist Name" {...register('name')} />
      <FormControl controlType="dropDown" label="Songs" options={musicData || []} {...register('musics')} />
      <FormControl controlType="input" type="text" label="Songs" {...register('m')} />
      <FormControl controlType="upload" label="Thumbnail" />
      <FormControl controlType="input" type="text" label="Tags" {...register('tag')} />
    </form>
  );
}
