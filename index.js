import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';

// import configureStore from './store';
// const store = configureStore()

// const RNRedux = () => {
//     return (
//         <Provider store={store}>
//             <App />
//         </Provider>
//     )
// }

AppRegistry.registerComponent(appName, () => App);
