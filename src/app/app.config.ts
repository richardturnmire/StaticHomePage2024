import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
  withViewTransitions,
} from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideImageKitLoader } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { httpFilterInterceptor } from '@app/interceptors/httpfilter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([httpFilterInterceptor]), withFetch()),
    provideImageKitLoader('https://ik.imagekit.io/bhzlxspbp/images/'),
    provideRouter(
      APP_ROUTES,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withPreloading(PreloadAllModules),
      withViewTransitions(),
    ),
    provideAnimations(),
    provideClientHydration(),
  ],
};
