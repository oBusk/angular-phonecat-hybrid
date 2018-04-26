// Import these globally to make teh typescript compiler happy by bringing in their @types
import 'angular';
import 'angular-resource';
import 'angular-route';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Need to import NG 1.x module
import './app-ajs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((platformRef) => {
    // Use the upgrade module to bootstrap the hybrid
    const upgrade = platformRef.injector.get(UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  })
  .catch(err => console.log(err));
