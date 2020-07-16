import React, { useEffect } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { BookContext } from '../../../../Contexts';
import World from './Countries'
import CommonHeader from '../../../Common/CommonHeader'

const WorldPage = ({ navigation }) => {

    useEffect(() => {
    }, []);

    return (
        <BookContext.Provider value={{ navigation }}>
            <CommonHeader
                title={'Affected Countries'}
            />
            <World />
        </BookContext.Provider>
    )
}

export default WorldPage;