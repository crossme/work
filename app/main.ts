import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

import {StoreService} from './storeservice';

platformBrowserDynamic().bootstrapModule(AppModule, [StoreService]);
