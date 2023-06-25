import { templateActions } from '@Store/actions/templateAction';
import { useDispatch } from 'react-redux';
import { initDomToCode } from 'dom-to-code';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import appRoutes from '@Routes/appRoutes';
import testRoutes from '@Routes/_test_/index.test';
import 'react-day-picker/dist/style.css';
import './assets/css/tailwind.css';
import Header from '@Organisms/Header';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      <div className="laxutw-m-auto laxutw-bg-white laxutw-h-fit">
        <Header />
        <div className="App">
          <div className="app-playground">
            {process.env.NODE_ENV !== 'production'
              ? generateRoutes({ routes: [...testRoutes, ...appRoutes] })
              : generateRoutes({ routes: appRoutes })}
          </div>
        </div>
      </div>
    </>
  );
}
