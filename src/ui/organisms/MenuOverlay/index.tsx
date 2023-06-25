import { overlayAnimation } from '@Animations/index';
// import Icon from '@Atoms/Icon';
// import { Button } from '@Atoms/radixComponents/Button';
// import { IOverlayComponentProps } from '@Schemas/interfaces';
import { motion } from 'framer-motion';

export default function MenuOverlay() {
  return (
    <motion.div
      {...overlayAnimation}
      className="laxutw-bg-white left-0 laxutw-w-1/5 laxutw-h-screen laxutw-px-2 laxutw-pt-6"
    >
      {/* <Button type="button" variant="icon-primary" size="sm-icon" onClick={() => onClose()}>
        <Icon iconName="close" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600" />
      </Button> */}
      This is menu overlay!
    </motion.div>
  );
}
