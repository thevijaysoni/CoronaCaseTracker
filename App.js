import React, { Component, useEffect } from 'react';
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Store from './store';
import Navigator from './src/Navigations'
import { StatusBar } from 'react-native';
import colors from './src/utils/Colors';
import FirebaseClient from './src/FirebaseClient/FirebaseClient'
import DeviceInfo from 'react-native-device-info';

const store = Store();

const App = ({ navigation }) => {

  useEffect(() => {
    startAnalytics()
    checkPermission()
    // createNotificationListeners()

  }, [])

  //1
  async function checkPermission() {
    const enabled = await FirebaseClient.messaging().hasPermission();
    if (enabled) {
      let fcmToken = await FirebaseClient.messaging().getToken();
      console.log('================TOKEN====================');
      console.log(fcmToken);
      console.log('================TOKEN====================');
    } else {
      requestPermission();
    }
  }

  //2
  async function requestPermission() {
    try {
      await FirebaseClient.messaging().requestPermission();
      // User has authorised
      let fcmToken = await FirebaseClient.messaging().getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }


  async function startAnalytics() {
    await FirebaseClient.analytics().logEvent('tit', {
      color: 'red',
      via: 'App.js'
    })
  }

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#00b8b5'} />
      <Navigator />
    </Provider>
  )
}

export default App;

