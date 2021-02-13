import React from 'react';
import liff from '@line/liff';
import Button from '@material-ui/core/Button';
// import { styled } from '@material-ui/core/styles';
import {PrimaryButton, SecondaryButton} from './components/buttons'
import './App.css';

function App() {
  /* 追加: メッセージ送信 */
  const sendMessage = () => {
    liff.init({liffId: process.env.REACT_APP_LIFF_ID as string}) // LIFF IDをセットする
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}) // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) { // LIFFので動いているのであれば
          liff.sendMessages([{ // メッセージを送信する
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
          }]).then(function() {
            window.alert('Message sent');
          }).catch(function(error) {
            window.alert('Error sending message: ' + error);
          });
        }
      })
  }

  /* 追加: UserProfileをAlertで表示 */
  const getUserInfo = () => {
    liff.init({liffId: process.env.REACT_APP_LIFF_ID as string})
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({}) // ログインしていなければ最初にログインする
        } else if (liff.isInClient()) {
          liff.getProfile()  // ユーザ情報を取得する
            .then(profile => {
              const userId: string = profile.userId
              const displayName: string = profile.displayName
              alert(`Name: ${displayName}, userId: ${userId}`)
            }).catch(function(error) {
              window.alert('Error sending message: ' + error);
            });
        }
      })

  }

  return (
    <div className="App">
      <header className="App-header">
        <PrimaryButton className="button" onClick={sendMessage}>send message</PrimaryButton>
        <SecondaryButton className="button" onClick={getUserInfo}>show user info</SecondaryButton>
        <Button className="button" variant="contained" color="primary">sample</Button>
        <Button className="button" variant="contained" color="secondary">sample</Button>
      </header>
    </div>
  );
}

export default App;
