*Still under development*

This project is a part of IBM Mobile Foundation 8.0 lab series based on hybrid development approach and Ionic framework 3.4.2. Lab series consist of video excersises that listener should repeat on prepare VM image. 

## Lab 2.75 Securing backend calls with user authentication

**Description:** Create security check to validate user credentials and implement client-side handler to grab them. Secure adapter procedures with scope and map it to security check
**Time to complete:** 50 minutes 

*Below you can find gists that may be useful during lab execution*. 

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
