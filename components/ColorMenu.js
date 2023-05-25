/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ColorMenu = ( { title, data, navigation } ) => {

    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate( 'ColorPalette', { paletteName: title, colors: data } )}
            >
                <Text style={styles.menuTitle}>{title}</Text>
            </TouchableOpacity>
            <FlatList
                data={data.slice( 0, 5 )}
                keyExtractor={item => item.hexCode}
                renderItem={( { item } ) => ( <View style={[styles.menuBox, { backgroundColor: item.hexCode }]} /> )}
                horizontal={true}
                style={styles.flatList}
                initialNumToRender={5}
            />
        </View>
    );
};

const styles = StyleSheet.create( {
    menuTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuBox: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    flatList: {
        gap: 3,
    }
} );

export default ColorMenu;
