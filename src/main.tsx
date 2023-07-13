// eslint-disable-next-line import/no-extraneous-dependencies
import setupLocatorUI from '@locator/runtime';
import { AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/index.css';
import AuthContextProvider from './context/auth.context';
import store from './store';

if (process.env.NODE_ENV === 'development') {
  setupLocatorUI();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      suspense: false,
      // retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AnimatePresence>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </QueryClientProvider>
  </AnimatePresence>,
);
