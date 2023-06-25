import Icon from '@Atoms/Icon';
import logo from '@Assets/images/logo.png';
import Image from '@Atoms/Image';
import { Input } from '@Atoms/radixComponents/Input';
import { Button } from '@Atoms/radixComponents/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PortalTemplate from '@Templates/PortalTemplate';
import MenuOverlay from '@Organisms/MenuOverlay';

export default function Header() {
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  return (
    <>
      <div className="laxutw-w-full laxutw-px-4 laxutw-py-2">
        <div className="cover laxutw-w-full laxutw-flex laxutw-gap-2">
          <div className="left laxutw-flex laxutw-gap-8 laxutw-items-center laxutw-justify-center laxutw-flex-1 ">
            <Button type="button" variant="icon-primary" size="sm-icon" onClick={() => setMenuIsVisible(true)}>
              <Icon iconName="menu" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600 laxutw-text-3xl" />
            </Button>
            <Image src={logo} className="laxutw-h-[1.5rem]" onClick={() => navigate('/')} />
            <Input
              type="text"
              hasIcon
              iconName="search"
              iconPosition="left"
              placeholder="Search Music"
              className="laxutw-flex-1"
            />
          </div>
          <Button
            type="button"
            variant="primary"
            className="laxutw-flex laxutw-gap-4"
            onClick={() => navigate('/detect-mood')}
          >
            <h5>Detect Mood</h5> <Icon iconName="detection_and_zone" />
          </Button>
        </div>
      </div>
      {menuIsVisible && (
        <PortalTemplate onClose={() => setMenuIsVisible(false)}>
          <MenuOverlay />
        </PortalTemplate>
      )}
    </>
  );
}
