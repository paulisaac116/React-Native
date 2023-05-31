/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Button, Switch, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFetchColors from '../hooks/useFetchColors';

import ColorMenu from '../components/ColorMenu';

const Home = ( { navigation, route } ) => {

    const colorPalette = useFetchColors();
    // const [paletteArray, setPaletteArray] = useState( [] );
    const [paletteArray, setPaletteArray] = useState( route.params?.array ?? [] );

    useEffect( () => {

        setPaletteArray( route.params?.array );
    }, [route.params?.array] );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Button
                    title='Add a color scheme'
                    onPress={() => navigation.navigate( 'ColorPaletteModal' )}
                />
            </View>
            <View>
                <Text style={{ color: 'black' }}>Your own Palette Color</Text>
            </View>
            <FlatList
                data={paletteArray}
                keyExtractor={item => item.id}
                renderItem={( { item } ) => (
                    <ColorMenu
                        data={item.colors}
                        title={item.paletteName}
                        navigation={navigation}
                        key={item.id}
                    />
                )}
                ListEmptyComponent={<Text>There are no colors in yout Palett. Add some!</Text>}


            />
            <FlatList
                data={colorPalette.data ?? []}
                keyExtractor={item => item.id}
                refreshing={colorPalette.isLoading}
                onRefresh={() => useFetchColors}
                renderItem={( { item } ) => (
                    <ColorMenu
                        data={item.colors}
                        title={item.paletteName}
                        navigation={navigation}
                        key={item.id}
                    /> )
                }
                style={styles.flatList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create( {
    mainContainer: {
        backgroundColor: 'white',
    },
    loading: {
        color: 'black',
        fontSize: 18,
        backgroundColor: 'pink',
    },
    flatList: {
        gap: 5,
        height: 500,
    },
} );

export default Home;
