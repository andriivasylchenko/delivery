## Lab 2.73 Добавление SDK и регистрация приложения на сервере

**Описание:** Установка Mobile Foundation client-side sdk для cordova приложения, регистрация приложения на сервере и контроль загрузки библиотек

**Время выполнения:** 30 минут 

*Ниже вы можете найти команды и примеры кода, которые помогут вам в процессе выполнения лабораторной работы*. 

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
