import React, { useState, useContext, useEffect } from 'react';
import { View, Image, FlatList, ScrollView, RefreshControl, Dimensions, StatusBar, ActivityIndicator, TextInput, StyleSheet } from 'react-native';
import { BookContext } from '../../../../Contexts';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Colors from '../../../../utils/Colors'
import { IMG_RELOAD, IMG_BACKGROUND, IMG_MAP, IMG_BG2 } from '../../../../utils/ImageRes';
import RegularText from '../../../Common/RegulatText';
import { FONT_RALEWAY_BOLD, FONT_RALEWAY_EXTRABOLD } from '../../../../utils/Typography';
import RowCountries from '../../../Rows/RowCountries'
import { getCountryWiseDataAction } from '../../../../actions/actions'
const { width } = Dimensions.get("window")
import { getIsCheck } from '../../../../utils/Utils'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Countries = ({ }) => {

    const { navigation } = useContext(BookContext)
    const dispatch = useDispatch();

    const [countryData, setCountryData] = useState(undefined)
    const [reRender, setReRender] = useState(false)
    const [searchText, setSearchText] = useState('')

    const { countryWiseData, loading } = useSelector(state => ({
        countryWiseData: state.getCountryWiseCasesReducer.countryWiseData,
        loading: state.getCountryWiseCasesReducer.loading,
    }), shallowEqual);

    useEffect(() => {
        if (countryWiseData == undefined) {
            getCountryWiseData()
        }
        if (countryWiseData != undefined) {
            setCountryData(countryWiseData)
        }
    }, [countryWiseData])

    function getCountryWiseData() {
        dispatch(getCountryWiseDataAction())
    }

    function onPressDown(item, index) {
        // let data = countryWiseData
        item.isArrowOpen == true
        //countryWiseData = data
    }

    function onPressDown(item, index) {
        let OldArray = countryData;
        let selected = item
        let temp = getIsCheck(selected.isOpen, index)
        selected.isOpen = temp
        OldArray[index] = selected;
        setCountryData(OldArray)
        setReRender(!reRender)
    }

    function searchCountry(value) {
        let data = countryWiseData
        setSearchText(value)
        if (value == '') {
            setCountryData(countryWiseData)
        } else {
            const newData = data.filter(function (item) {
                const itemData = item.country ? item.country.toUpperCase() : ''.toUpperCase();
                const textData = value.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setCountryData(newData)
        }
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.grey100
        }}>

            <View style={styles.searchBar}>
                <TextInput
                    placeholder={'Search Country'}
                    onChangeText={(value) => searchCountry(value)}
                />
            </View>

            {
                countryWiseData != undefined && countryData != undefined ?
                    <FlatList
                        //data={countryData}
                        // data={countryData.sort((a, b) => a.country.localeCompare(b.country))}
                        data={countryData.sort(function (a, b) { return b.cases - a.cases })}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={loading == undefined ? loading : loading}
                                onRefresh={getCountryWiseData}
                            />
                        }
                        renderItem={({ item, index }) => {
                            return (
                                <RowCountries
                                    index={index}
                                    item={item}
                                    onPressDown={onPressDown}
                                    data={countryWiseData}
                                />
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
    searchBar: {
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        height: 50,
        elevation: 2,
        paddingHorizontal: 5,
        justifyContent: 'center',
        marginBottom: 15
    },
})

export default Countries;