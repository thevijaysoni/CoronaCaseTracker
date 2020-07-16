import { createStackNavigator } from 'react-navigation-stack';

import BottomNavigator from './bottomTabNavigator'

const RouteConfig = {
    bottomNavigator: {
        screen: BottomNavigator
    }
};

const APPNavigatorConfig = {
    initialRouteName: 'bottomNavigator',
    header: null,
    headerMode: 'none'
};

const APPNavigator = createStackNavigator(RouteConfig, APPNavigatorConfig)

export default APPNavigator;
