import React, { useState, useContext, useEffect } from 'react';
import { View, Image, FlatList, ScrollView, RefreshControl, Dimensions, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import { BookContext } from '../../../../Contexts';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import RowCountries from '../../../Rows/RowCountries';
import RowIndia from '../../../Rows/RowIndia';
import Colors from '../../../../utils/Colors'
import { getIndiaDataAction } from '../../../../actions/actions'
import { getIsCheck } from '../../../../utils/Utils';
import FastImage from 'react-native-fast-image';
import RegularText from '../../../Common/RegulatText';
import { FONT_POPPINS_EXTRABOLD } from '../../../../utils/Typography';

const { width } = Dimensions.get("window")

const precautions = [
    {
        type: 'Wear Mask While Going Outside',
        gif: 'https://1.bp.blogspot.com/-CI3XywpftUc/XpYdwOhcrqI/AAAAAAAAAV8/GUkxo4chtb0eFkz_4zdFX5ZT0k-QNbzyQCLcBGAsYHQ/s1600/wear_mask.gif'
    },
    {
        type: 'Use Alcohol Based Hand Sanitizer',
        gif: 'https://1.bp.blogspot.com/-NFCjaE3QgEg/XpYdtgkwowI/AAAAAAAAAVw/1x-U3Y2jI08ImsJrMlE5zTX9mamE5lopQCLcBGAsYHQ/s1600/hand_sanitizer.gif'
    },
    {
        type: 'Avoid Touching People',
        gif: 'https://1.bp.blogspot.com/-ZZpT9BI0IDk/XpYdvLOct-I/AAAAAAAAAV4/GW11g3c1Cgw9Lg7TLIZGxRT5mg3vEgWowCLcBGAsYHQ/s1600/namaste.gif'
    },
    {
        type: 'Wash Your Hands Often',
        gif: 'https://1.bp.blogspot.com/-9pcX_MjCTNU/XpYdwEevrOI/AAAAAAAAAWA/PSgcCLwL3uwG2wxnsOpDtvVIKRe2YzsHgCLcBGAsYHQ/s1600/wash_hand.gif'
    },
    {
        type: 'Sick? Call The Helpline',
        gif: 'https://1.bp.blogspot.com/-8jcVJY1Uge0/XpYdt6WvkWI/AAAAAAAAAV0/qxatmMbTpBUHxWDymK-2Y0V-lslzR_WqgCLcBGAsYHQ/s1600/doctors.gif'
    },
]

const India = ({ }) => {

    const { navigation } = useContext(BookContext)
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])

    return (
        <ScrollView
            // style={{
            //     flex: 1,
            //     backgroundColor: Colors.white,
            //     alignItems: 'center'
            // }}
            contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: Colors.white,
                alignItems: 'center'
            }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewStyle}>
                    <FastImage
                        style={styles.gifStyle}
                        resizeMode='contain'
                        source={{
                            uri: precautions[0].gif,
                            priority: 'high'
                        }}
                    />
                    <RegularText
                        title={'1. ' + precautions[0].type}
                        numberOfLines={3}
                        textAlign={'center'}
                        font={FONT_POPPINS_EXTRABOLD}
                    />
                </View>
                <View style={styles.viewStyle}>
                    <FastImage
                        style={styles.gifStyle}
                        resizeMode='contain'
                        source={{
                            uri: precautions[1].gif,
                            priority: 'high'
                        }}
                    />
                    <RegularText
                        title={'2. ' + precautions[1].type}
                        numberOfLines={3}
                        textAlign={'center'}
                        font={FONT_POPPINS_EXTRABOLD}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewStyle}>
                    <FastImage
                        style={styles.gifStyle}
                        resizeMode='contain'
                        source={{
                            uri: precautions[2].gif,
                            priority: 'high'
                        }}
                    />
                    <RegularText
                        title={'3. ' + precautions[2].type}
                        numberOfLines={3}
                        textAlign={'center'}
                        font={FONT_POPPINS_EXTRABOLD}
                    />
                </View>
                <View style={styles.viewStyle}>
                    <FastImage
                        style={styles.gifStyle}
                        resizeMode='contain'
                        source={{
                            uri: precautions[3].gif,
                            priority: 'high'
                        }}
                    />
                    <RegularText
                        title={'4. ' + precautions[3].type}
                        numberOfLines={3}
                        textAlign={'center'}
                        font={FONT_POPPINS_EXTRABOLD}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewStyle}>
                    <FastImage
                        style={{
                            width: 500,
                            height: 250
                        }}
                        resizeMode='contain'
                        source={{
                            uri: precautions[4].gif,
                            priority: 'high'
                        }}
                    />
                    <RegularText
                        title={'5. ' + precautions[4].type}
                        numberOfLines={3}
                        textAlign={'center'}
                        font={FONT_POPPINS_EXTRABOLD}
                    />
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: Colors.white,
        //elevation: 5,
        borderRadius: 5,
        flex: 1,
        //width: '90%',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: width / 9
    },
    gifStyle: {
        height: 150,
        width: 150
        //flex: 1
    }
})

export default India;