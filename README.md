*Still under development*

This project is a part of IBM Mobile Foundation 8.0 lab series based on hybrid development approach and Ionic framework 3.4.2. Lab series consist of video excersises that listener should repeat on prepare VM image. 

## Lab 2.73 Adding MobileFirst SDK and registering app on server

**Description:** Install MobileFirst client-side sdk for cordova, register application and perform a proper init by catching SDK init event. Get familiar with basic application bootstrap process. 

**Time to complete:** 30 minutes 

*Below you can find gists that may be useful during lab execution*. 

```bash
git clone -b initial https://github.com/andriivasylchenko/delivery.git
```

```bash
ionic cordova platform add android@6.2.3

ionic cordova plugin add cordova-plugin-mfp@8.0.2017060910

ionic cordova plugin add cordova-plugin-mfp-push@8.0.2017012410

ionic cordova plugin add cordova-plugin-mfp-jsonstore@8.0.2017033009
```

```json
"watch": "ionic-app-scripts watch"
```

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

```typescript
document.addEventListener("mfpjsloaded", function(){
    console.debug('--> MFP Init complete')
    platformBrowserDynamic().bootstrapModule(AppModule);
})
```
