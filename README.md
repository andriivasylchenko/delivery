## Lab 2.78 Добавление и использование JSONStore в гибридном мобильном приложении

**Описание:** Сохраните новости в JSONStore, после чего достаньте их из хранилища и отобразите на странице

**Время выполнения:** 50 минут 

*Ниже вы можете найти команды и примеры кода, которые помогут вам в процессе выполнения лабораторной работы*. 

Link to article in developer center http://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/jsonstore/cordova/

```typescript
renderer.listenGlobal('document', 'mfpjsonjsloaded', () => {
  console.debug('--> MFP JSON API loaded');
  this.storage.init();
  this.news.load();
})
```

```typescript
init() {
    console.debug('--> StorageProvider init called');

    let collections = {
      news: {
        searchFields: {text: 'string', data: 'string'}
      }
    }

    WL.JSONStore.init(collections).then((success) => {
      console.debug('JSONStore init success')
    }, (failure) => {
      console.debug('JSONStore init failure', failure)
    })
  }

  put(data) {
    console.debug('--> StorageProvider put called');
    let collectionName = 'news';
    let options = {
      replaceCriteria: ['text', 'date'],
      addNew: true,
      markDrity: false
    }

    WL.JSONStore.get(collectionName).change(data, options).then((success) => {
      console.debug('--> JSONStore put success')
    }, (failure) => {
      console.debug('--> JSONStore put failure', failure)
    })

  }

  getAll() {
    console.debug('--> StorageProvider getAll called');

    return new Promise ( resolve => {

      let collectionName = 'news';
      let options = {}

      WL.JSONStore.get(collectionName).findAll(options).then((success) => {
        console.debug('--> JSONStore find success')
        resolve(success)
      }, (failure) => {
        console.debug('--> JSONStore find failure', failure)
        resolve('error')
      })
    })
  }

```
