import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DogImage from './DogImage';

const Section = ({children}) => {
    return (
        <View styles={styles.container}>
            <DogImage imageSource={dogData.corgi} />
            <DogImage imageSource={dogData.pug} />
        </View>
    );
};



const dogData = {
    corgi: 'corgi',
    pug: 'pug',
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'space-between',
        alignContent: 'space-between',
        backgroundColor: 'red',
    }
});

export default Section;