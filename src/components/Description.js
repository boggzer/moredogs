import React from 'react';
import { Text, StyleSheet } from 'react-native';

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
        marginBottom: 20,
    }
})

export default Description;