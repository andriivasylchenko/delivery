import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor() {
  }

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

}
