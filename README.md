## Lab 2.77 Добавление возможностей получения push уведомлений в мобильном приложении

**Описание:** Используя Push API, зарегистрируйте устройство и подпишитесь на рассылку по тегу. Отправьте push уведомления с сервера и получите его на устройстве

**Время выполнения:** 35 минут 

*Ниже вы можете найти команды и примеры кода, которые помогут вам в процессе выполнения лабораторной работы*. 

Link to article in developer center http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/notifications/sending-notifications/

```typescript
init() {
    MFPPush.initialize(function(success){
      console.debug('--> push init success')

      var options = {"phoneNumber": ""};

      MFPPush.registerNotificationsCallback(pushNotificationReceived);

      MFPPush.registerDevice(options, function(success){
        console.debug('--> device register success')

        var tag = ['delivery'];

        MFPPush.subscribe(tag, function(success){
          console.debug('--> push subscribe success')
        }, function(failure){
          console.debug('--> push subscribe success', failure)
        })
      }, function(failure){
        console.debug('--> device register failure', failure)
      })
    }, function(failure){
      console.debug('--> push init failure', failure)
    })

    function pushNotificationReceived(message) {
      console.debug('--> push received', message);
      alert(message.alert);
    }
  }
```

```typescript
let dataRequest = new WLResourceRequest("http://192.168.42.169:4567/schedule", WLResourceRequest.GET);

dataRequest.send().then((response) => {
  console.debug('--> data loaded from adapter', response);
  this.data = response.responseJSON.delivery;
  resolve(this.data)
}, (failure) => {
  console.debug('--> failed to load data from adapter', failure);
  resolve('error')
})

```
