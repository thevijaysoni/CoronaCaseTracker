import React, { useState, useContext, useEffect } from 'react';
import { View, Image, FlatList, ScrollView, RefreshControl, Dimensions, StatusBar, ActivityIndicator } from 'react-native';
import { BookContext } from '../../../../Contexts';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import RowCountries from '../../../Rows/RowCountries';
import RowIndia from '../../../Rows/RowIndia';
import Colors from '../../../../utils/Colors'
import { getIndiaDataAction, } from '../../../../actions/actions'
import { getIsCheck } from '../../../../utils/Utils';

const { width } = Dimensions.get("window")

const India = ({ }) => {

    const { navigation } = useContext(BookContext)
    const dispatch = useDispatch();

    const [indiaCases, setIndiaCases] = useState(undefined)
    const [reRender, setReRender] = useState(false)

    const { indiaData, loading } = useSelector(state => ({
        indiaData: state.getIndiaCasesReducer.indiaData,
        loading: state.getIndiaCasesReducer.loading,
    }), shallowEqual);

    useEffect(() => {
        if (indiaData == undefined) {
            getIndiaData()
        }
        if (indiaData != undefined) {
            //setIndiaCases(indiaData)
            //sortIndiaCases()
            setIndiaCase()
        }
    }, [indiaData])

    function getIndiaData() {
        dispatch(getIndiaDataAction())
    }

    function setIndiaCase() {
        let data = indiaData

        for (let i = 0; i < data.length; i++) {
            let total = 0
            for (let j = 0; j < data[i].districtData.length; j++) {
                total = total + data[i].districtData[j].confirmed
            }
            data[i].totalCases = total
        }

        setIndiaCases(data)
    }

    function onPressDown(item, index) {
        let OldArray = indiaCases;
        let selected = item
        let temp = getIsCheck(selected.isOpen, index)
        selected.isOpen = temp
        OldArray[index] = selected;
        setIndiaCases(OldArray)
        setReRender(!reRender)
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.grey100
        }}>

            {
                indiaCases != undefined ?
                    <FlatList
                        //data={indiaCases.sort((a, b) => a.state.localeCompare(b.state))}
                        data={indiaCases.sort(function (a, b) { return b.totalCases - a.totalCases })}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={loading == undefined ? loading : loading}
                                onRefresh={getIndiaData}
                            />
                        }
                        renderItem={({ item, index }) => {
                            return (
                                <RowIndia
                                    index={index}
                                    item={item}
                                    onPressDown={onPressDown}
                                    data={indiaCases}
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

export default India;