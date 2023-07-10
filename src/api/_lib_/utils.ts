/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Proxies } from '@Constants/Proxies';

export function getProxy(proxy: string | Proxies): string {
  const mode: string | undefined = process.env.NODE_ENV;
  if (mode && mode !== 'development') {
    if (proxy === '/api') return process.env.API_URL;
    if (proxy === '/fastapi') return process.env.FAST_API_URL;
  }
  return proxy;
}
