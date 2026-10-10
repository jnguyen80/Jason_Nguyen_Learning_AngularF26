import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
  defaultMonkeyType: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
