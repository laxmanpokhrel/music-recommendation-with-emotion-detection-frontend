import { templateActions } from '@Store/actions';
import { useDispatch } from 'react-redux';
import { initDomToCode } from 'dom-to-code';
import generateRoutes from '@Routes/_lib_/generateRoutes';
import appRoutes from '@Routes/appRoutes';
// import { useQueryErrorResetBoundary } from 'react-query';

export default function App() {
  const dispatch = useDispatch();
  dispatch(templateActions.templateReducerOne({ key: 'value' }));
  // const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      {process.env.NODE_ENV !== 'production' && initDomToCode()}
      {/* <ErrorBoundary onReset={reset} fallbackRender={({ resetErrorBoundary }) => <ErrorPage />}> */}
      <div className="App">{generateRoutes({ routes: appRoutes })}</div>
      {/* </ErrorBoundary> */}
    </>
  );
}
