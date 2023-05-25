/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ( { colorName, colorHex } ) => {

    const textColor = {
        color: parseInt( colorHex.replace( '#', '' ), 16 ) > 0xffffff / 1.1 ? 'black' : 'white',
    };

    return (
        <View style={[styles.box, { backgroundColor: colorHex }]}>
            <Text
                style={[styles.text, textColor]}
            >
                {colorName} {colorHex}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create( {
    box: {
        color: 'white',
        paddingVertical: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
} );

export default ColorBox;
