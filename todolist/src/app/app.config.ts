import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withJsonpSupport, withXsrfConfiguration } from '@angular/common/http';

// https://blog.ninja-squad.com/2022/11/09/angular-http-in-standalone-applications/
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes), provideHttpClient(withJsonpSupport(),
    withXsrfConfiguration({
      cookieName: 'TOKEN', // default is 'XSRF-TOKEN'
      headerName: 'X-TOKEN' // default is 'X-XSRF-TOKEN'
    }))]
};
