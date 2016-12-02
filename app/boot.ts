import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Http} from 'http/http';


platformBrowserDynamic().bootstrapModule(AppModule, [HTTP_PROVIDERS]);
