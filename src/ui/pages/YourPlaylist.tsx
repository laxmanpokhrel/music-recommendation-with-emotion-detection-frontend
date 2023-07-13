import Icon from '@Atoms/Icon';
import { Button } from '@Atoms/radixComponents/Button';
import { useState } from 'react';
import { PiTrashSimple } from 'react-icons/pi';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authenticatedApi } from '../../api/config';
import { PlaylistCreateService } from '../_lib_';
import RoundedContainer from '../molecules/RoundedContainer';
import PortalTemplate from '../templates/PortalTemplate';

export default function YourPlaylist() {
  const { data } = PlaylistCreateService.fetchData();
  const queryClient = useQueryClient();
  const [deleteID, setDeleteID] = useState<string>('');
  const {
    mutate: deletePlaylist,
    data: response,
    error,
  } = useMutation({
    mutationFn: (payload) => {
      return authenticatedApi.delete(`${process.env.API_URL}/playlists/${payload}`);
    },
    onSuccess: () => {
      setDeleteID('');
      queryClient.refetchQueries(['/api', 'personal_playlist']);
    },
  });
  const navigate = useNavigate();
  toast.dismiss();
  if (response) {
    toast.success(response?.data?.message);
  } else if (error) {
    toast.error(error?.response?.data?.message);
  }
  if (!data?.data?.length)
    return (
      <div className="w-full flex flex-col justify-center items-center gap-4 h-[92vh]">
        <p className="text-2xl text-gray-600">No Playlist created Yet</p>
        <Button type="button" onClick={() => navigate('/create-playlist')}>
          Create One
        </Button>
      </div>
    );

  return (
    <>
      <div className="home-page-template text-lg w-full h-full grid pt-10">
        <div className="grid grid-cols-3 gap-6 w-3/5 m-auto">
          {data?.data?.map((item: any) => {
            return (
              <div className="bg-gray-200 p-2 rounded-lg shadow-xl group min-w-[10rem] border border-gray-300">
                <div className="flex justify-between w-full">
                  <h4>{item.name}</h4>
                  <div>
                    <PiTrashSimple
                      onClick={() => {
                        setDeleteID(item.id);
                      }}
                    />
                  </div>
                </div>
                {item.musics.map((itm: any) => (
                  <h6 className="pl-4 flex gap-1 w-fit border p-2 hover:bg-gray-400 items-center justify-center">
                    <p className="flex-1">{itm.title}</p>
                    <Icon iconName="play_arrow" className="cursor-pointer" />
                  </h6>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      {deleteID && (
        <PortalTemplate>
          <RoundedContainer className="absolute bg-gray-100 w-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
            <div className="content flex flex-col gap-2 p-3">
              <h4>Are you sure?</h4>
              <div className="actions flex gap-2 w-full justify-end">
                <Button variant="secondary" onClick={() => setDeleteID('')}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => deletePlaylist(deleteID)}>
                  Continue
                </Button>
              </div>
            </div>
          </RoundedContainer>
        </PortalTemplate>
      )}{' '}
    </>
  );
}
