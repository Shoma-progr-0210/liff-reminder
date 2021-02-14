import React from 'react';
import liff from '@line/liff';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { TertiaryButton, NomalButton } from './components/buttons'
import Header from './components/header'
import Home from './pages/home'
import './App.css';

function App() {
  liff.init({liffId: process.env.REACT_APP_LIFF_ID as string}) // LIFF IDをセットする
  .then(() => {})
  /* 追加: メッセージ送信 */
  const sendMessage = () => {
    // liff.init({liffId: process.env.REACT_APP_LIFF_ID as string}) // LIFF IDをセットする
    //   .then(() => {
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
      // })
  }

  /* 追加: UserProfileをAlertで表示 */
  const getUserInfo = () => {
    // liff.init({liffId: process.env.REACT_APP_LIFF_ID as string})
    //   .then(() => {
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
      // })
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div>
      <Route exact path='/' component={Home}/>
      <Route path='/send' render={ () => <TertiaryButton className="button" onClick={sendMessage}>send message</TertiaryButton> }/>
      <Route path='/info' render={ () => <NomalButton className="button" onClick={getUserInfo}>show user info</NomalButton> }/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
