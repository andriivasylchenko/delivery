## Lab 2.74 Использование Java и Javascript адаптеров для получения данных

**Описание:** Создать HTTP адаптеры и изменить код приложения для выполнения вызовов через  них с использованием WLResourceRequest API. Ознакомится со структурой Java и Javascript адаптеров и custom properties 

**Время выполнения:** 40 минут 

*Ниже вы можете найти команды и примеры кода, которые помогут вам в процессе выполнения лабораторной работы*. 

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

link to adapters repository
https://github.com/MobileFirst-Platform-Developer-Center/Adapters/tree/release80

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
