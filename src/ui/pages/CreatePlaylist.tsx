import FormControl from '@Templates/FormControl';

export default function CreatePlaylist() {
  // const { data } = MusicService.fetchData();
  return (
    <form className="home-page-template text-lg w-2/5 flex flex-col  gap-4 m-auto h-full  pt-10">
      <FormControl controlType="input" type="text" label="PlayList Name" />
      <FormControl controlType="dropDown" label="Songs" options={[]} />
      <FormControl controlType="upload" label="Thumbnail" />
    </form>
  );
}
