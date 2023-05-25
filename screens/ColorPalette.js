/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import ColorList from '../components/ColorList';

const ColorPalette = ( { route } ) => {

    return (
        <ColorList
            title={route.params.paletteName}
            data={route.params.colors}
        />
    );
};

const styles = StyleSheet.create( {
    safeAreaView: {
        flex: 1,
    },
    background: {
        backgroundColor: 'pink',
    },
    container: {
        paddingTop: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        // flex: 1,
    },
} );

export default ColorPalette;
