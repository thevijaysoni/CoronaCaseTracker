import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import APPNavigator from './appNavigation';
import SplashScreen from '../../src/components/screens/Splash';

const RootNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: APPNavigator
}, {
    initialRouteName: 'Splash'
});


export default createAppContainer(RootNavigator);