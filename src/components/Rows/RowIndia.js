import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Animated, FlatList } from 'react-native'
import Colors from '../../utils/Colors'
import RegularText from '../Common/RegulatText';
import { IMG_TAB_INDIA_ACTIVE, IMG_INDIA, IMG_DOWN_ARROW, IMG_UP, IMG_DOWN } from '../../utils/ImageRes';
import { FONT_RALEWAY_BOLD, FONT_RALEWAY_MEDIUM, FONT_POPPINS_REGULAR } from '../../utils/Typography';
import { addCommasIndian } from '../../utils/Utils';
import { AdMobBanner, } from 'react-native-admob'
import { ADMOB_AD_UTIT_ID } from '../../utils/Constants';

function RowIndia({
    item,
    index,
    data,
    onPressDown
}) {

    const [isArrowOpen, setArrowOpen] = useState(item.isOpen)

    // let totalCases = 0
    // for (let i = 0; i < item.districtData.length; i++) {
    //     totalCases = totalCases + item.districtData[i].confirmed
    // }

    return (

        <View
            key={index.toString()}
            style={{
                marginTop: index == 0 ? 10 : 10,
                marginBottom: index == data.length - 1 ? 10 : 0
            }}
        >
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
            <TouchableOpacity
                style={[styles.mainView, {
                    borderBottomLeftRadius: item.isOpen ? 0 : 5,
                    borderBottomRightRadius: item.isOpen ? 0 : 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                }]}
                onPress={() => onPressDown(item, index)}
                activeOpacity={0.8}
            >
                <View style={{ flexDirection: 'row' }}>
                    <RegularText
                        title={item.state}
                    />
                    <RegularText
                        title={item.lastupdatedtime}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RegularText
                        title={'(' + addCommasIndian(item.totalCases) + ')'}
                        textStyle={{
                            color: Colors.pink500
                        }}
                        font={FONT_POPPINS_REGULAR}
                    />
                    <Image
                        source={IMG_DOWN_ARROW}
                        style={{
                            height: 15,
                            width: 15,
                            marginLeft: 10,
                            tintColor: Colors.grey500
                        }}
                        resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>
            {
                item.isOpen &&
                <View style={styles.expandalbleView}>
                    <View style={[styles.tableData, {}]}>
                        <View style={[styles.tabelView, { flex: 1.5, alignItems: 'flex-start' }]}>
                            <RegularText
                                title={'District'}
                                font={FONT_RALEWAY_MEDIUM}
                            />
                        </View>
                        <View style={[styles.tabelView, { justifyContent: 'flex-end' }]}>
                            <RegularText
                                title={'Confirm'}
                                font={FONT_RALEWAY_MEDIUM}
                            />
                        </View>
                        <View style={[styles.tabelView, { justifyContent: 'flex-end' }]}>
                            <RegularText
                                title={'Deaths'}
                                font={FONT_RALEWAY_MEDIUM}
                            />
                        </View>
                        <View style={[styles.tabelView, { justifyContent: 'flex-end' }]}>
                            <RegularText
                                title={'Active'}
                                font={FONT_RALEWAY_MEDIUM}
                            />
                        </View>
                        <View style={[styles.tabelView, { justifyContent: 'flex-end', }]}>
                            <RegularText
                                title={'Recovery'}
                                font={FONT_RALEWAY_MEDIUM}
                            />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: Colors.grey400, marginTop: 5 }}></View>
                    {
                        <FlatList
                            //data={indiaCases.sort((a, b) => a.state.localeCompare(b.state))}
                            data={item.districtData.sort(function (a, b) { return b.confirmed - a.confirmed })}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={[styles.tableData, {
                                        backgroundColor: index % 2 === 0 ? Colors.grey100 : Colors.grey100
                                    }]}>
                                        <View style={[styles.tabelView, { alignItems: 'flex-end', marginLeft: 2, flex: 1.5 }]}>
                                            <RegularText
                                                title={item.district}
                                            />
                                        </View>
                                        <View style={[styles.tabelView, { justifyContent: 'flex-end' }]}>
                                            {
                                                item.delta.confirmed != 0 &&
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image
                                                        source={IMG_UP}
                                                        style={{ width: 10, height: 10, tintColor: Colors.red500 }}
                                                        resizeMode='contain'
                                                    />

                                                    <RegularText title={item.delta.confirmed + '  '} textStyle={{ fontSize: 13, color: Colors.red500 }} />
                                                </View>
                                            }
                                            <RegularText
                                                title={addCommasIndian(item.confirmed)}
                                            />
                                        </View>
                                        <View style={[styles.tabelView, { justifyContent: 'flex-end' }]}>
                                            {
                                                item.delta.deceased != 0 &&
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Image
                                                        source={IMG_UP}
                                                        style={{ width: 10, height: 10, tintColor: Colors.red500 }}
                                                        resizeMode='contain'
                                                    />

                                                    <RegularText title={item.delta.deceased + '  '} textStyle={{ fontSize: 12, color: Colors.red500 }} />
                                                </View>
                                            }
                                            <RegularText
                                                title={addCommasIndian(item.deceased)}
                                            />
                                        </View>
                                        <View style={[styles.tabelView, { justifyContent: 'flex-end' }]}>
                                            <RegularText
                                                title={addCommasIndian(item.active)}
                                            />
                                        </View>
                                        <View style={[styles.tabelView, { justifyContent: 'flex-end', }]}>
                                            {
                                                item.delta.recovered != 0 &&
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                                    <Image
                                                        source={IMG_UP}
                                                        style={{ width: 10, height: 10, tintColor: Colors.green800 }}
                                                        resizeMode='contain'
                                                    />

                                                    <RegularText title={item.delta.recovered + '  '} textStyle={{ fontSize: 12, color: Colors.green800 }} />
                                                </View>
                                            }
                                            <RegularText
                                                title={addCommasIndian(item.recovered)}
                                            />
                                        </View>
                                    </View>
                                )
                            }} />
                    }
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        elevation: 2,
        flexDirection: 'row'
    },
    expandalbleView: {
        backgroundColor: Colors.grey300,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingBottom: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        elevation: 2
    },
    tableData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        alignItems: 'center',
        paddingHorizontal: 2,
        borderRadius: 3
    },
    tabelView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    }
})

export default RowIndia;