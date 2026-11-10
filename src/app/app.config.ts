import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './shared/config/app-config';
import { MonkeyService} from './services/monkey';
import { MockMonkeyService } from './services/mock-monkey';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://mysafeinfo.com/api/data',
        defaultMonkeyType: 'Chimpanzee',
      }
    },
    //to be able to switch to the real service,
    //you must delete the provider or change the useClass to MonkeyService
    // { provide: MonkeyService, useClass: MockMonkeyService }
  ]
};
