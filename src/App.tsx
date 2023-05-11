import { templateActions } from '@Store/actions';
import { useDispatch } from 'react-redux';
import { initDomToCode } from 'dom-to-code';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import appRoutes from '@Routes/appRoutes';
import testRoutes from '@Routes/_test_/index.test';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      <div className="App">
        {process.env.NODE_ENV !== 'production'
          ? generateRoutes({ routes: [...testRoutes, ...appRoutes] })
          : generateRoutes({ routes: appRoutes })}
      </div>
    </>
  );
}
