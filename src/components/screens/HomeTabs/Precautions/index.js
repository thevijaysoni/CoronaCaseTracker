import React, { useEffect } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { BookContext } from '../../../../Contexts';
import Precations from './Precations'
import CommonHeader from '../../../Common/CommonHeader';

const WorldPage = ({ navigation }) => {

    useEffect(() => {
    }, []);

    return (
        <BookContext.Provider value={{ navigation }}>
            <CommonHeader
                title={'PRECAUTIONS'}
            />
            <Precations />
        </BookContext.Provider>
    )
}

export default WorldPage;