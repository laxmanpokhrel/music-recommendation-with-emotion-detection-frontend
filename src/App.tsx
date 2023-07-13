import { templateActions } from '@Store/actions/templateAction';
import { useDispatch } from 'react-redux';
import { initDomToCode } from 'dom-to-code';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import appRoutes from '@Routes/appRoutes';
import testRoutes from '@Routes/_test_/index.test';
import 'react-day-picker/dist/style.css';
import Header from '@Organisms/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/tailwind.css';
import MusicPlayer from '@Organisms/MusicPlayer';
import { useLocation } from 'react-router-dom';
import useAuth from '@Hooks/useAuth';

export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));
  const { isAuthenticated } = useAuth();

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      <div className="m-auto h-fit relative">
        <Header />

        <div className="App h-full">
          <div className="app-playground h-full">
            {process.env.NODE_ENV !== 'production'
              ? generateRoutes({ routes: [...testRoutes, ...appRoutes] })
              : generateRoutes({ routes: appRoutes })}
          </div>
        </div>
        <ToastContainer position="bottom-right" newestOnTop />
      </div>
      {isAuthenticated && !['/upload-music', '/create-playlist'].includes(location.pathname) && (
        <MusicPlayer />
      )}
    </>
  );
}
