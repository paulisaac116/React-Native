/* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ColorBox from './ColorBox';

const ColorList = ( { paletteName, data } ) => {

    // const COLORS = [
    //     { colorName: 'Base03', hexCode: '#002b36' },
    //     { colorName: 'Base02', hexCode: '#073642' },
    //     { colorName: 'Base01', hexCode: '#586e75' },
    //     { colorName: 'Base00', hexCode: '#657b83' },
    //     { colorName: 'Base0', hexCode: '#839496' },
    //     { colorName: 'Base1', hexCode: '#93a1a1' },
    //     { colorName: 'Base2', hexCode: '#eee8d5' },
    //     { colorName: 'Base3', hexCode: '#fdf6e3' },
    //     { colorName: 'Yellow', hexCode: '#b58900' },
    //     { colorName: 'Orange', hexCode: '#cb4b16' },
    //     { colorName: 'Red', hexCode: '#dc322f' },
    //     { colorName: 'Magenta', hexCode: '#d33682' },
    //     { colorName: 'Violet', hexCode: '#6c71c4' },
    //     { colorName: 'Blue', hexCode: '#268bd2' },
    //     { colorName: 'Cyan', hexCode: '#2aa198' },
    //     { colorName: 'Green', hexCode: '#859900' },
    // ];


    return (
        <FlatList
            style={styles.flatList}
            data={data}
            keyExtractor={item => item.colorName}
            renderItem={( { item } ) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
            // ItemSeparatorComponent={<Text>-------</Text>}
            // horizontal={true}
            onEndReached={() => console.log( 'the end bro' )}
            ListHeaderComponent={<Text>{paletteName}</Text>}
        />
    );

};

const styles = StyleSheet.create( {
    flatList: {
        width: '100%',
        gap: 10,
        // height: '100%',
    },
} );

export default ColorList;
