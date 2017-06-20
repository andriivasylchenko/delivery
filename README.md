*Still under development*

This project is a part of IBM Mobile Foundation 8.0 lab series based on hybrid development approach and Ionic framework 3.4.2. Lab series consist of video excersises that listener should repeat on prepare VM image. 

## Lab 2.76 Authenticating external resource using MobieFirst Foundation

**Description:** Add validator to Node.js Mock Server to check authentication token on MobileFirst Foundation and prevent unauthenticated calls 

**Time to complete:** 25 minutes 

*Below you can find gists that may be useful during lab execution*. 

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
