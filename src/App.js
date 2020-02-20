import 'react-native-gesture-handler';
import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StyleSheet, StatusBar, Animated } from 'react-native';

import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb( 255, 188, 181 )',
    flex: 1,
  },
});


const App = ({children}) => {
  return (
    <>
      <SafeAreaProvider style={styles.body}>
      <StatusBar hidden='true' />
        <Header />
          <Main />
        <Footer />
      </SafeAreaProvider>
    </>
  );
};

export default App;