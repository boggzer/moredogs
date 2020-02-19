import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

import App from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DogImage from '../components/DogImage';

import PlayScreen from './PlayScreen';

const HomeView = () => {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.flexFill}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={() => navigation.navigate('Play')}
                        style={styles.flexFill}>
                        <DogImage dogBreed={dogData.corgi}>
                            <Text style={styles.dogImageText}>Corgi</Text>
                        </DogImage>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexFill}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={() => alert('click')}
                        style={styles.flexFill}>
                        <DogImage dogBreed={dogData.pug}>
                            <Text style={styles.dogImageText}>Pug</Text>
                        </DogImage>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer />
        </>
    );
}

const Home = () => {
    return (
        <App>
            <HomeView />
        </App>
    )
}

const dogData = {
    corgi: 'corgi',
    pug: 'pug',
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: Colors.MELON,
    },
    flexFill: {
        flex: 1,
    },
    dogImageText: {
        fontSize: 60,
        fontFamily: 'HelveticaNeue-Bold',
        textTransform: 'lowercase',
        color: Colors.ALABASTER,
        height: '50%',
    }
});

export default Home;