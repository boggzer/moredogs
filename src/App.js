import 'react-native-gesture-handler';
import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StyleSheet, StatusBar } from 'react-native';

import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';

/** 
 * This renders the whole app.
 * @returns {SafeAreaProvider} Component containing the app.
 */
const App = () => {
  return (
    <SafeAreaProvider style={styles.body}>
      <StatusBar hidden='true' />
        <Header />
          <Main />
        <Footer />
      </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb( 255, 188, 181 )',
    flex: 1,
  },
});

export default App;