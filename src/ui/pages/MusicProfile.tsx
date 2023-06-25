import { useParams } from 'react-router-dom';

export default function MusicProfile() {
  const { musicId } = useParams();
  return <div>This is Music Profile page!! {musicId}</div>;
}
