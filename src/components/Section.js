import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DogImage from './DogImage';

const Section = () => {
    return (
        <View>
            <Text>cc
            </Text>
            <DogImage imageSource={dogData.corgi + dogData.link} />
        </View>
    );
};

const dogData = {
    corgi: 'corgi',
    shiba: 'shiba-inu',
    link: 'https://source.unsplash.com/random/?'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Section;