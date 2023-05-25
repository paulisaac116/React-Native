/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColorMenu from '../components/ColorMenu';
import useFetchColors from '../hooks/useFetchColors';

const Home = ( { navigation } ) => {

    const colorPalette = useFetchColors();

    return (
        <SafeAreaView>
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
