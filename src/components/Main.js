import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Section from './Section';
import DogImage from './DogImage';

const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.flexFill}>
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => alert('click')}
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

            {/* <View>
                <Button color='black' title='Button' />
            </View> */}
        </View>
    );
}

const dogData = {
    corgi: 'corgi',
    pug: 'pug',
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'rgb( 255, 188, 181 )',
    },
    flexFill: {
        flex: 1,
    },
    dogImageText: {
        fontSize: 60,
        fontFamily: 'HelveticaNeue-Bold',
        textTransform: 'lowercase',
        color: 'rgb( 239, 233, 231 )',
        height: '50%',
    }
});

export default Main;