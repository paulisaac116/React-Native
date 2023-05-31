/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ColorToggle = ( { colorName, setPaletteColorNames } ) => {

    const [isEnabled, setIsEnabled] = useState( false );
    const toggleSwitch = () => {
        setIsEnabled( prevState => !prevState );
        setPaletteColorNames( prevState => prevState.includes( colorName ) ? prevState.filter( item => item !== colorName ) : [...prevState, colorName] );
    };

    return (
        <View
            style={styles.toggleRow}
        >
            <Text
                style={styles.toggleText}
            >{colorName}</Text>
            <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
            />
        </View>
    );
};

const styles = StyleSheet.create( {
    toggleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 3,
        paddingVertical: 10,
        borderBottomStartRadius: 2,
    },
    toggleText: {
        fontSize: 16,
        color: 'black',
    }
} );

export default ColorToggle;
