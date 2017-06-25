## Lab 2.76 Аутентификация внешних ресурсов при помощи Mobile Foundation

**Описание:** Добавить validator к Node.js Mock Server для проверки token через Mobile Foundation и предотвращение небезопасных вызовов 

**Время выполнения:** 30 минут 

*Ниже вы можете найти команды и примеры кода, которые помогут вам в процессе выполнения лабораторной работы*. 

Link to article in developer center http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/authentication-and-security/protecting-external-resources/

```javascript
passport.use(new mfpStrategy({
  authServerUrl: 'http://localhost:9080/mfp/api',
  confClientID: 'mockServer',
  confClientPass: '123456',
  analytics: {
      onpremise: {
          url: 'http://localhost:9080/analytics-service/rest/v3',
          username: 'admin',
          password: 'admin'
      }
  }
}));
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
