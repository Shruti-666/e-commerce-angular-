import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  ...appConfig,   // keep your existing config
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withInterceptorsFromDi())   // ✅ add HttpClient provider here
  ]
}).catch((err) => console.error(err));

