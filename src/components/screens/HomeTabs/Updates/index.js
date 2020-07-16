import React, { useEffect } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { BookContext } from '../../../../Contexts';
import Updates from './Updates'
import CommonHeader from '../../../Common/CommonHeader';

const Update = ({ navigation }) => {

    useEffect(() => {
    }, []);

    return (
        <BookContext.Provider value={{ navigation }}>
            <CommonHeader
                title={"UPDATES"}
            />
            <Updates />
        </BookContext.Provider>
    )
}

export default Update;