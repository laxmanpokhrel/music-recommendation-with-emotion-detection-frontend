import { overlayAnimation } from '@Animations/index';
import Icon from '@Atoms/Icon';
import { Button } from '@Atoms/radixComponents/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function MenuOverlay() {
  const navigate = useNavigate();
  return (
    <motion.div
      {...overlayAnimation}
      className="laxutw-bg-white left-0 laxutw-w-1/5 laxutw-h-screen laxutw-px-2 laxutw-pt-6"
    >
      <h6>Menu</h6>
      <Button
        type="button"
        variant="link"
        size="sm"
        onClick={() => navigate('/upload-music')}
        className="laxutw-flex laxutw-gap-2"
      >
        <Icon iconName="upload_file" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
        <p>Upload Music</p>
      </Button>
      <Button
        type="button"
        variant="link"
        size="sm"
        onClick={() => navigate('/your-music')}
        className="laxutw-flex laxutw-gap-2"
      >
        <Icon iconName="music_note" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
        <p>Your Music</p>
      </Button>
    </motion.div>
  );
}
