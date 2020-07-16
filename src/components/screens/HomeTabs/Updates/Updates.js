import React, { useState, useContext, useEffect } from 'react';
import { View, Image, FlatList, ScrollView, RefreshControl, Dimensions, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import { BookContext } from '../../../../Contexts';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import RowCountries from '../../../Rows/RowCountries';
import RowIndia from '../../../Rows/RowIndia';
import Colors from '../../../../utils/Colors'
import { getIndiaDataAction, getTodaysUpdatesAction } from '../../../../actions/actions'
import { getIsCheck, getTimeInUtc, timeConvert } from '../../../../utils/Utils';
import FastImage from 'react-native-fast-image';
import RegularText from '../../../Common/RegulatText';
import { FONT_POPPINS_EXTRABOLD } from '../../../../utils/Typography';
import { AdMobBanner, } from 'react-native-admob'
import { ADMOB_AD_UTIT_ID } from '../../../../utils/Constants';

const { width } = Dimensions.get("window")

const India = ({ }) => {

    const { navigation } = useContext(BookContext)
    const dispatch = useDispatch();

    const { todaysUpdate, loading } = useSelector(state => ({
        todaysUpdate: state.getTodaysUpdatesReducer.todaysUpdate,
        loading: state.getTodaysUpdatesReducer.loading,
    }), shallowEqual);

    useEffect(() => {
        getTodaysUpdates()
    }, [])

    // alert(JSON.stringify(todaysUpdate))

    function getTodaysUpdates() {
        dispatch(getTodaysUpdatesAction())
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >

            {
                todaysUpdate != undefined ?
                    <FlatList
                        data={todaysUpdate.reverse()}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={loading == undefined ? loading : loading}
                                onRefresh={getTodaysUpdates}
                            />
                        }
                        //inverted
                        renderItem={({ item, index }) => {
                            return (
                                <View style={[{
                                    marginBottom: index == todaysUpdate.length - 1 ? 100 : 0,
                                    marginTop: index == 0 ? 10 : 10
                                }]}>
                                    {
                                        index % 19 == 0 && index != 0 &&
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
                                    <RegularText textStyle={{ alignSelf: 'flex-start', color: Colors.grey500, marginLeft: 10 }} title={getTimeInUtc(item.timestamp * 1000, "hh:mm A, D MMMM")} />
                                    <View style={styles.viewStyle}>
                                        <RegularText
                                            title={item.update}
                                            numberOfLines={20}
                                        />
                                    </View>
                                </View>
                            )
                        }} />
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <ActivityIndicator color={Colors.blue800} size={"large"} />
                    </View>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: Colors.white,
        elevation: 1,
        borderRadius: 5,
        flex: 1,
        //alignItems: 'flex-start',
        marginVertical: 5,
        padding: 10,
        marginHorizontal: 10
    },
    updateStyle: {
    }
})

export default India;