import React, { lazy } from 'react'
import { View, Dimensions, Image } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Colors from '../utils/Colors'
import { IMG_TAB_WORLD_ACTIVE, IMG_TAB_WORLD_INACTIVE, IMG_TAB_COUNTRIES_ACTIVE, IMG_TAB_COUNTRIES_INACTIVE, IMG_TAB_INDIA_ACTIVE, IMG_TAB_INDIA_INACTIVE, IMG_TAB_PRECAUTION_ACTIVE, IMG_TAB_PRECAUTION_INACTIVE, IMG_TAB_UPDATES_ACTIVE, IMG_TAB_UPDATES_INACTIVE } from '../utils/ImageRes'
import WorldPage from '../components/screens/HomeTabs/World'
import CountriesPage from '../components/screens/HomeTabs/Countries'
import IndiaPage from '../components/screens/HomeTabs/India'
import Updates from '../components/screens/HomeTabs/Updates'
import Precautions from '../components/screens/HomeTabs/Precautions'

const { width, height } = Dimensions.get('window');
const TAB_WIDTH = width / 4;
const TAB_HEIGHT = 100;

export default createMaterialBottomTabNavigator(
    {
        World: {
            screen: WorldPage,
            navigationOptions: {
                tabBarVisible: true,
                tabBarIcon: ({ focused }) =>
                    <Image
                        style={{
                            height: 20, width: 20,
                            tintColor: !focused && Colors.white
                        }}
                        resizeMode='contain'
                        source={focused ? IMG_TAB_WORLD_ACTIVE : IMG_TAB_WORLD_INACTIVE}
                    />
            },
        },
        Countries: {
            screen: CountriesPage,
            navigationOptions: {
                tabBarVisible: true,
                tabBarIcon: ({ focused }) =>
                    <Image
                        style={{
                            height: 20, width: 20,
                            tintColor: !focused && Colors.white
                        }}
                        resizeMode='contain'
                        source={focused ? IMG_TAB_COUNTRIES_ACTIVE : IMG_TAB_COUNTRIES_INACTIVE}
                    />
            },
        },
        India: {
            screen: IndiaPage,
            navigationOptions: {
                tabBarVisible: true,
                tabBarIcon: ({ focused }) =>
                    <Image
                        style={{
                            height: 20, width: 20,
                            tintColor: !focused && Colors.white
                        }}
                        resizeMode='contain'
                        source={focused ? IMG_TAB_INDIA_ACTIVE : IMG_TAB_INDIA_INACTIVE}
                    />
            },
        },
        Updates: {
            screen: Updates,
            navigationOptions: {
                tabBarVisible: true,
                tabBarIcon: ({ focused }) =>
                    <Image
                        style={{
                            height: 20, width: 20,
                            tintColor: !focused && Colors.white
                        }}
                        resizeMode='contain'
                        source={focused ? IMG_TAB_UPDATES_ACTIVE : IMG_TAB_UPDATES_INACTIVE}
                    />
            },
        },
        Precautions: {
            screen: Precautions,
            navigationOptions: {
                tabBarVisible: true,
                tabBarIcon: ({ focused }) =>
                    <Image
                        style={{
                            height: 20, width: 20,
                            tintColor: !focused && Colors.white
                        }}
                        resizeMode='contain'
                        source={focused ? IMG_TAB_PRECAUTION_ACTIVE : IMG_TAB_PRECAUTION_INACTIVE}
                    />
            },
        },
    },
    {
        initialRouteName: 'World',
        barStyle: {
            backgroundColor: Colors.grey900
        },
        labeled: true,
        lazy: false
        // tabBarPosition: 'bottom',
        // tabBarOptions: {
        //     indicatorStyle: { height: 0 },
        //     contentContainerStyle: {
        //         marginHorizontal: 10,
        //         borderRadius: 10
        //     },
        //     style: {
        //         backgroundColor: Colors.grey900,
        //         height: 60
        //     },
        //     pressColor: Colors.transparent,
        // },
    }
);