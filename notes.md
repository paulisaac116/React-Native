### React Native
---

<br>

### **Lists**
---
There are two kind of list in React Native: 
#### <code>FlatList</code>
To render an array of items
```js
import {FlatList} from 'react-native';

const List = () => {

    const COLORS = [
        { colorName: 'Base03', hexCode: '#002b36' },
        { colorName: 'Base02', hexCode: '#073642' },
        { colorName: 'Base01', hexCode: '#586e75' }
    ];
    /**
     * data:
     *  - the array of data to be displayed or map over
     * 
     * keyExtractor:
     *  - the unique key for each item
     *  - if data has a 'key' property, this attribute is not required
     *      - { colorName: 'Base03', hexCode: '#002b36', key: 1 }
     * 
     * renderItem:
     *  - takes an item from 'data' and renders it into the list
     *  - destructuring '{item}'' as each item in the array data
     * 
     * numColums:
     *  - render multiple colums
     *  - only if horizontal === false
     * 
     * ItemSeparatorComponent:
     *  - a JSX element or a function to separate each item in the list
     * 
     * ListEmptyComponent:
     *  - the item to be displayed in case the 'data' is empty
     * 
     * onReachedEnd:
     *  - a callback that fires when the user scrolls to the end of the list
     */

    return (
        <FlatList
            data={COLORS}
            keyExtractor={item => item.colorName}
            renderItem={( { item } ) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
            ItemSeparatorComponent={<Text>-------</Text>}
        />
    );
};


```


### <code>SectionList</code>
To render an array of items with some sections inside the list
```js
const Section = () => {
    const FOODS = [
      { title: 'Healthy', data: ['Apples', 'Broccoli']},
      { title: 'Not so Healthy', data: ['Cookies', 'Doritos', 'Eclairs']},
    ];
    /**
     * sections:
     *  - the array of data to be displayed or map over
     *  - every object needs to have a 'title' and a 'data' array
     * 
     * renderSectionHeader:
     *  - the title of every section in the list
     */

    return (
    <SafeAreaView>
      <SectionList
        sections={FOODS}
        keyExtractor={item => item}
        renderItem={data => <Food name={data.item} />}
        renderSectionHeader={({ section }) => (<Text>{section.title}</Text>)}
      />
    </SafeAreaView>
  );
}


```

<br>

### **Navigation**
---
Since React Native does not have a built-in API for navigation like a web browser does, we need to use a library

There are two main libraries to manage navigation in React Native:
* React Navigation
* React Native Navigation (Wix Team)

The recommended one for the React Team and the widely used is **React Navigation**, which also provides the iOS and Android gestures and animations to transition between screens

<br>

#### **Installation**
Follow the _Getting Started_ tutorial on the [React Native Website](https://reactnavigation.org/docs/getting-started)

If necessary, follow the [React Native Course Tutorial](https://kadikraman.github.io/react-native-v2/navigation-rn), to add some special dependencies

> After an installation of native dependecies, its necessary to rebuild the app by executing the commands:
```bat
npx react-native start
npx react-native run-android
```

#### **usage**

<code>NavigationContainer</code>  
Component wich manages the tree navigation and contains the _navigation state_

<br>

<code>createNativeStackNavigation()</code>  
A function that returns and object with 2 properties:
* <code>Stack.Navigator</code>: contains the screens to render
- <code>Stack.Screen</code>: Takes a name prop as the route and a component to render (mandatory props)


```js
/**
 * In the 5.x version of React Navigation, it was necessary to add the import of
 * 'react-native-gesture-handler'
 * 
 * Although, in the 6.x version its not necessary to add this imports
 * at the top of the main file
 * 
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';


/**
 * 
 * To specify common options to every screen
 * we can pass 'screenOptions' to 'Stack.Navigatior'
 * 
 * To specify screen-specific options
 * we can pass an object to 'options' in 'Stack.Screen'
 * 
 */

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='ColorPalette'
          component={ColorPalette}
          options={({ route }) => ({ title: route?.params?.paletteName ?? '' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
```

<br>

#### **Navigation between screens**
We can consider the screens to navigate as a stack  
When we create a component using <code>Stack.Screen</code>, this component is added to the native stack navigator

<code>navigation.navigate('Home')</code>  
Push the screen into the stack only if is not there  
If it's, go back to the closest screen in the stack


<code>navigation.push('Home')</code>  
Push the screen into the stack


<code>navigation.goBack()</code>  
Go back to the previous screen in the stack


<code>navigation.popToTop()</code>  
Navigate to the first navigation screen set in the <code>Stack.Navigator</code> component

Follow the next example to get a more detailed explanation in the [navigation methods](https://snack.expo.dev/@isaac_dev/9f5213)

<br>

### **Pull to Refresh**
---
We can add a refreshing animation during the rendering of a list adding its props into the component
```js
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import useFetchColors from '../hooks/useFetchColors';

import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ColorMenu from '../components/ColorMenu';

const Home = ( { navigation, route } ) => {

  /**
   * refreshing (boolean):
   *  - if true, show the refresing animation
   * 
   * onRefresh (function):
   *  - Enable the refreshing gesture
   *  - Runs the provided function by doing the refresh
   *    gesture
   * 
   */

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

export default Home;
```

