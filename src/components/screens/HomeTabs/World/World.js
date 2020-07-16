import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Image,
    FlatList,
    ScrollView,
    RefreshControl,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
    ImageBackground
} from 'react-native';
import { BookContext } from '../../../../Contexts';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Colors from '../../../../utils/Colors'
import { IMG_RELOAD, IMG_BACKGROUND, IMG_MAP, IMG_BG2 } from '../../../../utils/ImageRes';
import RegularText from '../../../Common/RegulatText';
import { FONT_RALEWAY_BOLD, FONT_RALEWAY_EXTRABOLD, FONT_POPPINS_EXTRABOLD, FONT_POPPINS_REGULAR } from '../../../../utils/Typography';
import { getGlobalDataAction } from '../../../../actions/actions'
import { getTimeInUtc, addCommas, addCommasIndian } from '../../../../utils/Utils';
import AdMobBanner from 'react-native-admob/RNAdMobBanner';
import { ADMOB_AD_UTIT_ID } from '../../../../utils/Constants';

const { width, height } = Dimensions.get("window")

const World = ({ }) => {

    const { navigation } = useContext(BookContext)
    const dispatch = useDispatch();

    const [spinValue, setSpinValue] = useState(new Animated.Value(0))

    const { globalData, loading } = useSelector(state => ({
        globalData: state.getGlobalCasesReducer.globalData,
        loading: state.getGlobalCasesReducer.loading,
    }), shallowEqual);

    useEffect(() => {
        getGlobalData()
        if (loading) {
            refreshData
        }
    }, [])

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    function getGlobalData() {
        refreshData()
        dispatch(getGlobalDataAction())
    }

    function refreshData() {
        Animated.timing(
            spinValue,
            {
                toValue: -1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            },
        ).start(() => setSpinValue(new Animated.Value(0)))

    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: Colors.GREEN_BLUE,
                    alignItems: 'center'
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

                <Image
                    source={IMG_BG2}
                    resizeMode='cover'
                    style={{
                        width: width,
                        height: height / 3,
                    }}
                />

                <View style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.viewStyle} >
                            <RegularText
                                title={'Total Cases'}
                                textStyle={styles.bigTextLabelStyle}
                                numberOfLines={2}
                            />
                            <RegularText
                                title={globalData != undefined ? addCommasIndian(globalData.cases) : '--'}
                                textStyle={[
                                    styles.bigTextStyle,
                                    {
                                        //color: Colors.red900
                                    }
                                ]}
                                font={FONT_POPPINS_EXTRABOLD}
                            />
                        </View>

                        <View style={styles.viewStyle} >
                            <RegularText
                                title={'Total Death'}
                                textStyle={styles.bigTextLabelStyle}
                                numberOfLines={2}
                            />
                            <RegularText
                                title={globalData != undefined ? addCommasIndian(globalData.deaths) : '--'}
                                textStyle={[
                                    styles.bigTextStyle,
                                    {
                                        color: Colors.redA400
                                    }
                                ]}
                                font={FONT_POPPINS_EXTRABOLD}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.viewStyle} >
                            <RegularText
                                title={'Today Cases'}
                                textStyle={styles.bigTextLabelStyle}
                                numberOfLines={2}
                            />
                            <RegularText
                                title={globalData != undefined ? addCommasIndian(globalData.todayCases) : '--'}
                                textStyle={[
                                    styles.bigTextStyle,
                                    {
                                        //color: Colors.red900
                                    }
                                ]}
                                font={FONT_POPPINS_EXTRABOLD}
                            />
                        </View>

                        <View style={styles.viewStyle} >
                            <RegularText
                                title={'Today Death'}
                                textStyle={styles.bigTextLabelStyle}
                                numberOfLines={2}
                            />
                            <RegularText
                                title={globalData != undefined ? addCommasIndian(globalData.todayDeaths) : '--'}
                                textStyle={[
                                    styles.bigTextStyle,
                                    {
                                        color: Colors.redA400
                                    }
                                ]}
                                font={FONT_POPPINS_EXTRABOLD}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.viewStyle} >
                            <RegularText
                                title={'Affected Countries'}
                                textStyle={styles.bigTextLabelStyle}
                                numberOfLines={2}
                            />
                            <RegularText
                                title={globalData != undefined ? addCommasIndian(globalData.affectedCountries) : '--'}
                                textStyle={[
                                    styles.bigTextStyle,
                                    {
                                        color: Colors.ACCENT_COLOR
                                    }
                                ]}
                                font={FONT_POPPINS_EXTRABOLD}
                            />
                        </View>

                        <View style={styles.viewStyle} >
                            <RegularText
                                title={'Recovered'}
                                textStyle={styles.bigTextLabelStyle}
                                numberOfLines={2}
                            />
                            <RegularText
                                title={globalData != undefined ? addCommasIndian(globalData.recovered) : '--'}
                                textStyle={[
                                    styles.bigTextStyle,
                                    {
                                        color: Colors.green800
                                    }
                                ]}
                                font={FONT_POPPINS_EXTRABOLD}
                            />
                        </View>
                    </View>
                    <View style={{
                        borderRadius: 5,
                        marginHorizontal: 12,
                        marginVertical: 10,
                        alignItems: 'center',
                        flexDirection: 'row',
                        alignSelf: 'flex-start',
                        justifyContent: 'center',
                        backgroundColor: Colors.white,
                        padding: 5
                    }} >
                        <RegularText
                            title={'Last Updated : '}
                            textStyle={[styles.bigTextLabelStyle, { marginBottom: 0, color: Colors.grey600 }]}
                            font={FONT_POPPINS_REGULAR}
                        />
                        <RegularText
                            title={globalData != undefined ? getTimeInUtc(globalData.updated, 'hh:mm A, DD MMMM YYYY') : '--'}
                            textStyle={[styles.bigTextLabelStyle, { marginBottom: 0, color: Colors.grey600 }]}
                            font={FONT_POPPINS_REGULAR}
                        />
                    </View>
                </View>
                {
                    <View style={{
                        //marginBottom: 10
                        alignItems: 'center'
                    }}>
                        <AdMobBanner
                            adSize="banner"
                            adUnitID={ADMOB_AD_UTIT_ID}
                        />
                    </View>
                }
            </ScrollView>
            <TouchableOpacity
                style={styles.reloadButton}
                onPress={() => getGlobalData()}
            >
                <Animated.Image
                    resizeMode='contain'
                    source={IMG_RELOAD}
                    style={{
                        height: 20,
                        width: 20,
                        transform: [{ rotate: spin }],
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    reloadButton: {
        backgroundColor: Colors.grey900,
        height: 40,
        width: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 5,
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 10,
        height: width / 4,
        width: width / 2.3,
        marginHorizontal: 10,
        textAlign: 'center',
    },
    bigTextStyle: {
        fontSize: 20,
        color: Colors.blue800
    },
    bigTextLabelStyle: {
        color: Colors.grey700,
        marginBottom: 5,
        //textAlign: 'justify'
    }
})

export default World;