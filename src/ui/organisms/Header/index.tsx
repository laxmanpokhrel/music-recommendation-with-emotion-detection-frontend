import Icon from '@Atoms/Icon';
import logo from '@Assets/images/logo.png';
import Image from '@Atoms/Image';
import Input from '@Atoms/radixComponents/Input';
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
      <div className="w-full px-4 py-2 min-h-[8vh]">
        <div className="cover w-full flex gap-2">
          <div className="left flex gap-8 items-center justify-center flex-1 ">
            <Button type="button" variant="icon-primary" size="sm-icon" onClick={() => setMenuIsVisible(true)}>
              <Icon iconName="menu" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600 text-3xl" />
            </Button>
            <Image src={logo} className="h-[1.5rem]" onClick={() => navigate('/')} />
            <Input type="text" hasIcon leftIconName="search" placeholder="Search Music" className="flex-1" />
          </div>
          <Button
            type="button"
            variant="secondary"
            className="flex !px-2 !py-1 gap-4"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button type="button" variant="primary" className="flex gap-4" onClick={() => navigate('/detect-mood')}>
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
