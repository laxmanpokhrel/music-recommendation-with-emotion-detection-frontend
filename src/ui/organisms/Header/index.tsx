import logo from '@Assets/images/logo.svg';
import Icon from '@Atoms/Icon';
import Image from '@Atoms/Image';
import { Button } from '@Atoms/radixComponents/Button';
import MenuOverlay from '@Organisms/MenuOverlay';
import PortalTemplate from '@Templates/PortalTemplate';
import { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import { musicPlayerActions } from '../../../store/actions/musicPlayerActions';
import RoundedContainer from '../../molecules/RoundedContainer';
import MusicSearch from './MusicSearch';

export default function Header() {
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const { user, setUser } = useUser();
  const [confirmLogout, setConfirmLogout] = useState<boolean>(false);
  const pathName = window.location.pathname;
  const isLoginPage = pathName === '/login';
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full px-4 py-2 min-h-[8vh]">
        <div className="cover w-full flex gap-2">
          <div className="left flex gap-8 items-center justify-center flex-1 ">
            <Button type="button" variant="icon-primary" size="sm-icon" onClick={() => setMenuIsVisible(true)}>
              <Icon iconName="menu" className="naxatw-p-0 naxatw-m-0 naxatw-text-gray-600 text-3xl" />
            </Button>
            <Image src={logo} className="h-[1.5rem]" onClick={() => navigate('/')} />
            <MusicSearch />
            {/* <Input type="text" hasIcon leftIconName="search" placeholder="Search Music" className="flex-1" /> */}
          </div>
          {!user && !isLoginPage && (
            <Button
              type="button"
              variant="secondary"
              className="flex !px-2 !py-1 gap-4"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          )}
          {user && !isLoginPage && (
            <div className="flex items-center ">
              <BiUserCircle
                className="mr-2"
                size={30}
                onClick={() => navigate('/profile')}
                style={{
                  color: '#05A48E',
                }}
              />
              <Button
                type="button"
                variant="secondary"
                className="flex !px-2 !py-1 gap-4"
                onClick={() => setConfirmLogout(true)}
              >
                Logout
              </Button>
            </div>
          )}
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
      {confirmLogout && (
        <PortalTemplate>
          <RoundedContainer className="absolute bg-gray-100 w-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
            <div className="content flex flex-col gap-2 p-3">
              <h4>Are you sure?</h4>
              <div className="actions flex gap-2 w-full justify-end">
                <Button variant="secondary" onClick={() => setConfirmLogout(false)}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(musicPlayerActions.setMusic(undefined));
                    dispatch(musicPlayerActions.togglePlay(false));
                    setUser(null);
                    setConfirmLogout(false);
                    navigate('/login');
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          </RoundedContainer>
        </PortalTemplate>
      )}
    </>
  );
}
