import "reflect-metadata"
import "zone.js/dist/zone";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './appModules';  

platformBrowserDynamic().bootstrapModule(AppModule);
