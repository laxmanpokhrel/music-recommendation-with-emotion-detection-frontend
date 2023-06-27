import { templateActions } from '@Store/actions/templateAction';
import { useDispatch } from 'react-redux';
import { initDomToCode } from 'dom-to-code';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import appRoutes from '@Routes/appRoutes';
import testRoutes from '@Routes/_test_/index.test';
import 'react-day-picker/dist/style.css';
import './assets/css/tailwind.css';
import Header from '@Organisms/Header';
import MusicPlayer from '@Organisms/MusicPlayer';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      <div className="m-auto  h-fit relative">
        <Header />
        <div className="App h-full">
          <div className="app-playground h-full">
            {process.env.NODE_ENV !== 'production'
              ? generateRoutes({ routes: [...testRoutes, ...appRoutes] })
              : generateRoutes({ routes: appRoutes })}
          </div>
        </div>
      </div>
      <MusicPlayer />
    </>
  );
}
