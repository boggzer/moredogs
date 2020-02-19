import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StyleSheet, StatusBar, View } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb( 255, 188, 181 )',
    flex: 1,
  },
});

const HomeScreen = () => {
  return (
    <View></View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden='true' />
      <SafeAreaProvider style={styles.body}>
        <Header />
        <Main />
        <Footer />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
