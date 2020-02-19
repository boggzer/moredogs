import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'yellow',
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: 'blue',
  },
  container: {
    flex: 9,
  },
  footer: {
    flex: 1,
  },
});

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <Header />
        <Main style={styles.header}/>
        <Footer />
      </SafeAreaView>
    </>
  );
};


export default App;
