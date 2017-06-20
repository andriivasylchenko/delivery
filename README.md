*Still under development*

This project is a part of IBM Mobile Foundation 8.0 lab series based on hybrid development approach and Ionic framework 3.4.2. Lab series consist of video excersises that listener should repeat on prepare VM image. 

## Lab 2.78 Adding JSONStore to hybrid mobile app

**Description:** Store news messages inside JSONStore and display them on news tab 

**Time to complete:** 50 minutes 

*Below you can find gists that may be useful during lab execution*. 

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
