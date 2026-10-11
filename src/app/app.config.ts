import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './shared/config/app-config';
import { MonkeyService} from './services/monkey';
import { MockMonkeyService } from './services/mock-monkey';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultMonkeyType: 'Chimpanzee',
      }
    },
    //to be able to switch to the real service,
    //you must delete the provider or change the useClass to MonkeyService
    { provide: MonkeyService, useClass: MockMonkeyService }
  ]
};
