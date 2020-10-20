import React, { Component, useEffect, useState, useContext } from 'react';
import {
    View,
    ImageBackground,
    Image,
    StatusBar,
    Dimensions,
    Animated,
    Easing
} from 'react-native'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { BookContext } from '../../Contexts';
import Colors from '../../utils/Colors';
import RegularText from '../Common/RegulatText'
import { IMG_SPLASH_LOGO, IMG_TAB_INDIA_ACTIVE } from '../../utils/ImageRes';
import { FONT_FAMILY_RIGHTEOUS_REGULAR, FONT_RALEWAY_MEDIUM, FONT_RALEWAY_LIGHT, FONT_RALEWAY_EXTRALIGHT, FONT_RALEWAY_THIN } from '../../utils/Typography';

const screenWidth = Math.round(Dimensions.get('window').width);

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('App')
        }, 3000);
    }, [])

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: Colors.grey900,
                paddingVertical: 20
            }}
        >
            <StatusBar hidden />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={IMG_SPLASH_LOGO}
                    style={{
                        height: 150,
                        marginTop: screenWidth / 3,
                        marginBottom: 20,
                    }}
                    resizeMode='contain'
                />
                <RegularText
                    textStyle={{
                        fontSize: 20,
                        color: Colors.green500
                    }}
                    title={'CORONA TRACKER'}
                    font={FONT_FAMILY_RIGHTEOUS_REGULAR}
                />
            </View>
            <RegularText
                textStyle={{
                    fontSize: 12,
                    color: Colors.grey100
                }}
                title={'- By SR Devops'}
            //font={FONT_RALEWAY_LIGHT}
            />
        </View>
    )
}

export default Splash;
