import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { worker } from './mocks/mock-worker';

/**
  * It depends on which version of Angular you are using. 
  * Assuming you are using Angular 14+, it will also depend on if you are using the standalone way of building your app without modules, or if you choose to use modules. 
  * Before v14, modules was the only way. Both ways accomplish the same thing.
  * 
  * For modules, you would use RouterModule.forRoot
  * For standalone, you would usee provideRouter
  * 
  * Recommend to do stand alone.
  * There are many benefits. However, if you are working on a large app that would need to be migrated from modules to standalone, in order to use provideRouter, then I would be cautious. 
  * Ultimately, updating your app is beneficial, but there is no immediate rush since we will have backwards compatibility for the foreseeable future.
 */

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// run mock service worker
worker.start();