/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, FlatList, Button, Alert, Switch } from 'react-native';
import { COLORS } from '../data/ColorsArray';
import ColorToggle from '../components/ColorToggle';

const ColorPaletteModal = ( { navigation, route } ) => {

    const [paletteName, setPaletteName] = useState( '' );
    const [paletteColorNames, setPaletteColorNames] = useState( [] );

    const handleSubmit = () => {
        if ( paletteName === '' ) {
            return Alert.alert(
                'Input Error',
                'Enter a palette name',
                [{ text: 'Ok' },]
            );
        }
        else if ( paletteColorNames.length < 3 ) {
            return Alert.alert(
                'Toggle Error',
                'Select at least 3 palette colors',
                [{ text: 'Ok' }]
            );
        }
        else {
            const newPaletteArray = [{
                id: paletteName,
                paletteName: paletteName,
                colors: paletteColorNames.map( colorName => COLORS.find( color => colorName === color.colorName ) )
            },
            ];
            navigation.navigate( {
                name: 'Home',
                params: { array: newPaletteArray },
                merge: true,
            } );
        }
    };

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View>
                <Text style={{ color: 'black' }}>Name of your color palette</Text>
                <TextInput
                    style={styles.inputText}
                    value={paletteName}
                    onChangeText={setPaletteName}
                    placeholder='Palette Name'
                />
            </View>
            <FlatList
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={( { item } ) => (
                    <ColorToggle
                        colorName={item.colorName}
                        setPaletteColorNames={setPaletteColorNames}
                    />
                    // <View
                    //     style={styles.toggleRow}
                    // >
                    //     <Text
                    //         style={styles.toggleText}
                    //     >
                    //         {item.colorName}
                    //     </Text>
                    //     <Switch
                    //         value={isEnabled}
                    //         onValueChange={() => toggleSwitch( item.colorName )}
                    //     />
                    // </View>
                )}
                style={styles.flatList}
            />
            <Button
                title='Submit'
                style={styles.button}
                onPress={handleSubmit}
            />
        </SafeAreaView>

    );

};

const styles = StyleSheet.create( {
    inputText: {
        borderColor: 'black',
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 6,
    },
    container: {
        paddingVertical: 3,
        paddingHorizontal: 12,
    },
    flatList: {
        marginTop: 10,
        paddingHorizontal: 6,
        columnGap: 3,
        height: 600,
        // backgroundColor: 'pink',
    },
    button: {
        marginTop: 6,
    },
} );

export default ColorPaletteModal;
