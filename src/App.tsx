import React from 'react';
import liff from '@line/liff';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { TertiaryButton, NomalButton } from './components/buttons'
// import Header from './components/Header'
import Copyright from './components/Copyright'
import Home from './pages/Home'
import RemindDetail from './pages/RemindDetail'
import './App.css';

const useStyles = makeStyles((theme) => ({
  // appBar: {
  //   position: 'relative',
  // },
  layout: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

function App() {
  if(liff.isInClient()){
    liff.init({liffId: process.env.REACT_APP_LIFF_ID as string}) // LIFF IDをセットする
    .then(() => {})
  }

  const classes = useStyles();

  /* 追加: メッセージ送信 */
  const sendMessage = () => {
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
  }

  /* 追加: UserProfileをAlertで表示 */
  const getUserInfo = () => {
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
  }

  return (
    <React.Fragment>
      <BrowserRouter>
      {/* <Header /> */}
      <main className={classes.layout} >
      <Route exact path='/' component={Home}/>
      <Route path='/create' component={RemindDetail}/>
      <Route path='/send' render={ () => <TertiaryButton className="button" onClick={sendMessage}>send message</TertiaryButton> }/>
      <Route path='/info' render={ () => <NomalButton className="button" onClick={getUserInfo}>show user info</NomalButton> }/>
      {/* <Copyright /> */}
      </main>
      <Copyright />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
