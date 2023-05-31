/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import ColorPaletteModal from './screens/ColorPaletteModal';

// create the screens to navigate in a stack
const RootStack = createStackNavigator();
const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={Home} />
      <MainStack.Screen name='ColorPalette' component={ColorPalette} options={({ route }) => ({ title: route?.params?.paletteName ?? '' })} />
    </MainStack.Navigator>
  )
}

const client = new QueryClient();


function App(): JSX.Element {

  /**
   * the screen added at the top will be the
   * main screen or the screen by default
   * 
   * name:
   *  - the unique key for each of the screens
   * 
   * component:
   *  - the component to render
   */

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ presentation: 'card' }}>
          <RootStack.Screen
            name='Main'
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name='ColorPaletteModal' component={ColorPaletteModal} options={{ title: 'Add a color scheme' }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

// const styles = StyleSheet.create({
//   safeAreaView: {
//     flex: 1,
//   },
//   background: {
//     backgroundColor: 'pink',
//   },
//   container: {
//     paddingTop: 20,
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 10,
//     // flex: 1,
//   },
// });

export default App;
