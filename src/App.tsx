import { templateActions } from '@Store/actions';
import { useDispatch } from 'react-redux';
import { initDomToCode } from 'dom-to-code';
import ProjectPage from '@Pages/ProjectPage';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import appRoutes from '@Routes/appRoutes';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      <div className="App">{generateRoutes({ routes: appRoutes })}</div>
    </>
  );
}
