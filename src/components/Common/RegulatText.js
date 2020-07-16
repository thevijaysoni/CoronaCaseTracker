import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors'
import * as Typography from '../../utils/Typography'

const RegularText = (props) => {
    const {
        title,
        style,
        font,
        bold,
        numberOfLines,
        textStyle,
        textAlign
    } = props;

    return (
        <View style={[styles.constainer, style]}>
            <Text
                numberOfLines={numberOfLines != undefined ? numberOfLines : 1}
                style={[styles.txtInput, textStyle, {
                    fontWeight: bold != undefined ? bold : 'normal',
                    fontFamily: font != undefined ? font : Typography.FONT_POPPINS_REGULAR,
                    textAlign: textAlign != undefined ? textAlign : 'left'
                }]}
            >
                {
                    title
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        justifyContent: 'center',
    },
    txtInput: {
        // color: Colors.ColorText,
        color: Colors.textColor
    },
});

export default RegularText;