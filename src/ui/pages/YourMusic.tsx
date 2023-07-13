import Icon from '@Atoms/Icon';
import { Button } from '@Atoms/radixComponents/Button';
import RoundedContainer from '@Molecules/RoundedContainer';
import PortalTemplate from '@Templates/PortalTemplate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MusicService } from '../_lib_';

export default function YourMusic() {
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>('');

  const { data } = MusicService.fetchData();

  const { mutate: deleteYourMusic } = MusicService.hardDeleteData({
    onSuccess: () => {
      setConfirmDelete(false);
      navigate('/your-music');
    },
    mutationKey: ['delete-music', deleteId],
  });

  return (
    <>
      <div className="home-page-template text-lg w-full h-full grid pt-10">
        <div className="flex flex-col gap-3 w-3/5 m-auto">
          <div className="info flex- flex-col gap-2">
            <h4>Your musics</h4>
            <p className="text-sm">You can edit, update and delete music here.</p>
          </div>
          {data?.data.map((item: any) => {
            return (
              <div key={item.title} className="group transition-all duration-150 ease-in rounded-lg overflow-hidden">
                <div className="w-full flex justify-between items-center bg-gray-100 min-h-[1rem] px-4 py-3 ">
                  <div>{item.title}</div>
                  <div className="actions flex gap-2">
                    <Button variant="icon-primary" className="!p-1 !bg-gray-100">
                      <Icon iconName="visibility" className="text-black cursor-pointer" />
                    </Button>
                    <Button
                      variant="icon-primary"
                      className="!p-1 !bg-gray-100"
                      onClick={() => {
                        navigate(`/upload-music/edit/${item.id}`);
                      }}
                    >
                      <Icon iconName="edit" className="text-black cursor-pointer" />
                    </Button>
                    <Button
                      variant="icon-primary"
                      className="!p-1 !bg-gray-100"
                      onClick={() => {
                        setConfirmDelete(true);
                        setDeleteId(item.id);
                      }}
                    >
                      <Icon iconName="delete" className="text-other-red cursor-pointer" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {confirmDelete && (
        <PortalTemplate>
          <RoundedContainer className="absolute bg-gray-100 w-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
            {/* <div className="head !px-0 flex justify-end">
              <Button variant="icon-primary" className="!p-1 !bg-gray-100" onClick={() => setConfirmDelete(false)}>
                <Icon iconName="close" className="text-black cursor-pointer" />
              </Button>
            </div> */}
            <div className="content flex flex-col gap-2 p-3">
              <h4>Are you sure?</h4>
              <div className="actions flex gap-2 w-full justify-end">
                <Button variant="secondary" onClick={() => setConfirmDelete(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => deleteYourMusic(deleteId)}>
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
