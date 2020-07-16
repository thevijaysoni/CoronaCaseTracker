import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Animated } from 'react-native'
import Colors from '../../utils/Colors'
import RegularText from '../Common/RegulatText';
import { IMG_TAB_INDIA_ACTIVE, IMG_INDIA, IMG_DOWN_ARROW } from '../../utils/ImageRes';
import { FONT_RALEWAY_BOLD, FONT_POPPINS_REGULAR } from '../../utils/Typography';
import { addCommasIndian } from '../../utils/Utils';
import { AdMobBanner, } from 'react-native-admob'
import { ADMOB_AD_UTIT_ID } from '../../utils/Constants';

function RowCountries({
    item,
    index,
    data,
    onPressDown
}) {

    const [isArrowOpen, setArrowOpen] = useState(item.isOpen)

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
                style={[
                    styles.mainView,
                    {
                        borderBottomLeftRadius: item.isOpen ? 0 : 5,
                        borderBottomRightRadius: item.isOpen ? 0 : 5,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5
                    }
                ]}
                onPress={() => onPressDown(item, index)}
                activeOpacity={0.8}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: item.countryInfo.flag }}
                        style={{
                            height: 20,
                            width: 30,
                            marginRight: 10
                        }}
                        resizeMode='contain'
                    />
                    <RegularText
                        title={item.country}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RegularText
                        title={'(' + addCommasIndian(item.cases) + ')'}
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
                    <View style={styles.tableData}>
                        <RegularText
                            title={'Total Cases'}
                        />
                        <RegularText
                            title={addCommasIndian(item.cases)}
                        />
                    </View>
                    <View style={styles.tableData}>
                        <RegularText
                            title={'Total Deaths'}
                        />
                        <RegularText
                            title={addCommasIndian(item.deaths)}
                        />
                    </View>
                    <View style={styles.tableData}>
                        <RegularText
                            title={'Active'}
                        />
                        <RegularText
                            title={addCommasIndian(item.active)}
                        />
                    </View>
                    <View style={styles.tableData}>
                        <RegularText
                            title={'Today Cases'}
                        />
                        <RegularText
                            title={addCommasIndian(item.todayCases)}
                        />
                    </View>
                    <View style={styles.tableData}>
                        <RegularText
                            title={'Today Deaths'}
                        />
                        <RegularText
                            title={addCommasIndian(item.todayDeaths)}
                        />
                    </View>
                    <View style={styles.tableData}>
                        <RegularText
                            title={'Total Recovered'}
                        />
                        <RegularText
                            title={addCommasIndian(item.recovered)}
                        />
                    </View>
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
    }
})

export default RowCountries;