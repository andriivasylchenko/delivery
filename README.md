*Still under development*

This project is a part of IBM Mobile Foundation 8.0 lab series based on hybrid development approach and Ionic framework 3.4.2. Lab series consist of video excersises that listener should repeat on prepare VM image. 

## Lab 2.77 Add push notification capabilities to mobile app and configure server side to send push messages

**Description:** Using new Push API register device and subscribe for a custom tag to receive Push messages 

**Time to complete:** 35 minutes 

*Below you can find gists that may be useful during lab execution*. 

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
