*Still under development*

This project is a part of IBM Mobile Foundation 8.0 lab series based on hybrid development approach and Ionic framework 3.4.2. Lab series consist of video excersises that listener should repeat on prepare VM image. 

## Lab 2.74 Using Java and Javascript adapters to perform backend calls

**Description:** Create HTTP adapters and modify application to perform backend calls though WLResourceRequest API using adapters. Get familiar with Java and Javascript adapter structure, custom properties 

**Time to complete:** 40 minutes 

*Below you can find gists that may be useful during lab execution*. 

```xml
<property name="endpoint" displayName="Endpoint" defaultValue="employees" type="string" />
```

```javascript
function getRating() {
	var endpoint = MFP.Server.getPropertyValue("endpoint");
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : endpoint
	};

	return MFP.Server.invokeHttp(input);
}
```

```java
JSONObject result = JSONObject.parse(JSONResponse.getEntity().getContent());
String json = result.toString();
```

```java
import com.ibm.mfp.adapter.api.OAuthSecurity;

@OAuthSecurity(enabled=false)
```

```typescript
let dataRequest = new WLResourceRequest("/adapters/employeeAdapter/getRating", WLResourceRequest.GET);

dataRequest.send().then((response) => {
  console.debug('--> data loaded from adapter', response);
  this.data = response.responseJSON.results;
  resolve(this.data)
}, (failure) => {
  console.debug('--> failed to load data from adapter', failure);
  resolve('error')
})
```

```typescript
let dataRequest = new WLResourceRequest("/adapters/JavaHTTP", WLResourceRequest.GET);

dataRequest.send().then((response) => {
  console.debug('--> data loaded from adapter', response);
  this.data = response.responseJSON.news;
  resolve(this.data)
}, (failure) => {
  console.debug('--> failed to load data from adapter', failure);
  resolve('error')
})
```
