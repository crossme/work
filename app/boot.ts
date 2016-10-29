import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

import {HTTP_PROVIDERS} from 'angular2/http';

platformBrowserDynamic().bootstrapModule(AppModule, [HTTP_PROVIDERS]);
