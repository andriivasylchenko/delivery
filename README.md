## Lab 2.75 Обеспечения безопасности backend вызовов

**Описание:** Создать security check для валидации логина и пароль пользователя, после чего внедрить handler на стороне приложения для обработки.  Обезопасить процедуры в адаптерах с помощью созданного security check

**Время выполнения:** 50 минут 

*Ниже вы можете найти команды и примеры кода, которые помогут вам в процессе выполнения лабораторной работы*. 

```typescript
  AuthInit(){
    this.AuthHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");
    this.AuthHandler.handleChallenge = ((response) => {
      console.debug('--> inside handleChallenge');
      if(response.errorMsg) {
        var msg = response.errorMsg + '<br>';
        msg += 'Remaining attempts: ' + response.remainingAttempts;
      }
      this.displayLogin(msg);
    })
  }
```

```typescript
displayLogin(msg){
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: msg,
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Login',
          handler: data => {
            console.log('--> Trying to auth with user', data.username);

            this.AuthHandler.submitChallengeAnswer(data);
          }
        }
      ]
    });
    prompt.present();
  }
```
