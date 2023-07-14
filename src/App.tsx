import Header from '@Organisms/Header';
import MusicPlayer from '@Organisms/MusicPlayer';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import testRoutes from '@Routes/_test_/index.test';
import appRoutes from '@Routes/appRoutes';
import { templateActions } from '@Store/actions/templateAction';
import { initDomToCode } from 'dom-to-code';
import 'react-day-picker/dist/style.css';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/tailwind.css';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));
  
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
      {!['/upload-music', '/create-playlist'].includes(location.pathname) && <MusicPlayer />}
    </>
  );
}
