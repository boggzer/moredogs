import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <>
        <View style={styles.container}>
            <Text>About</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: '10%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})

export default Footer;