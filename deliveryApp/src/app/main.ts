import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

document.addEventListener("mfpjsloaded", function(){
    console.debug('--> MFP Init complete')
    platformBrowserDynamic().bootstrapModule(AppModule);
})


