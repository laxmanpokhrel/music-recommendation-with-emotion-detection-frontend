import { overlayAnimation } from '@Animations/index';
import Icon from '@Atoms/Icon';
import { Button } from '@Atoms/radixComponents/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function MenuOverlay() {
  const navigate = useNavigate();
  return (
    <motion.div {...overlayAnimation} className="bg-white left-0 w-1/5 h-screen px-2 pt-6">
      <h6>Menu</h6>
      <Button type="button" variant="link" size="sm" onClick={() => navigate('/upload-music')} className="flex gap-2">
        <Icon iconName="upload_file" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
        <p>Upload Music</p>
      </Button>
      <Button type="button" variant="link" size="sm" onClick={() => navigate('/your-music')} className="flex gap-2">
        <Icon iconName="music_note" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
        <p>Your Music</p>
      </Button>
      <Button
        type="button"
        variant="link"
        size="sm"
        onClick={() => navigate('/create-playlist')}
        className="flex gap-2"
      >
        <Icon iconName="playlist_add" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
        <p>Create Playlist</p>
      </Button>
      <Button type="button" variant="link" size="sm" onClick={() => navigate('/your-playlist')} className="flex gap-2">
        <Icon iconName="playlist_add" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
        <p>Your Playlist</p>
      </Button>
    </motion.div>
  );
}
