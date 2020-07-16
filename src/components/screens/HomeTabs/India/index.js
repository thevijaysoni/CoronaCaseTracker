import React, { useEffect } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { BookContext } from '../../../../Contexts';
import World from './India'
import CommonHeader from '../../../Common/CommonHeader';

const WorldPage = ({ navigation }) => {

    useEffect(() => {
    }, []);

    return (
        <BookContext.Provider value={{ navigation }}>
            <CommonHeader
                title={'CORONA CASES IN INDIA'}
            />
            <World />
        </BookContext.Provider>
    )
}

export default WorldPage;