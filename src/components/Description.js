import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Description = () => {
    return (
        <Text style={styles.textStyle}>
            A random dog image generator.
        </Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontStyle: 'italic',
    }
})

export default Description;