import React, { useEffect } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { BookContext } from '../../../../Contexts';
import World from './World'

const WorldPage = ({ navigation }) => {

    useEffect(() => {
    }, []);

    return (
        <BookContext.Provider value={{ navigation }}>
            <World />
        </BookContext.Provider>
    )
}

export default WorldPage;