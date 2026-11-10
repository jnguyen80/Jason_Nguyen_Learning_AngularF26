import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './shared/config/app-config';
import { MonkeyService} from './services/monkey';
import { MockMonkeyService } from './services/mock-monkey';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './shared/interceptor/loading-interceptor';
import { errorInterceptor } from './shared/interceptor/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),

    //Order does not matter for this app because the loading interceptor only counts request and uses finalize.
    //This runs when request ends and chooses whether it will succeed or fail.
    //The error interceptor only reacts to failures and passes them on but neither one changes the request or
    //response which makes both of them work the same in any order.
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
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
