import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import Colors from '../../utils/Colors';
import { IMG_MENU, IMG_APP_LOGO } from '../../utils/ImageRes';
import RegularText from './RegulatText'
import { FONT_RALEWAY_BLACK, FONT_RALEWAY_LIGHT, FONT_RALEWAY_MEDIUM, FONT_RALEWAY_SEMIBOLD } from '../../utils/Typography';

function CommonHeader({
    backgroundColor,
    title,
    navigation
}) {
    return (
        <View style={{
            flex: 1,
            minHeight: 50,
            maxHeight: 50,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.tiffanyBlue,
            width: '100%',
            elevation: 5,
            justifyContent: 'center'
        }}>
            <RegularText
                title={title}
                //bold={'bold'}
                textStyle={{ fontSize: 18, color: Colors.white }}
                font={FONT_RALEWAY_SEMIBOLD}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        flex: 2,
        flexDirection: 'row',
        maxHeight: 50,
        justifyContent: 'center',
        paddingHorizontal: 10
    }
})

export default CommonHeader;