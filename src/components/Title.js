import React from 'react';
import { Text, StyleSheet } from 'react-native';

/**
 * Title component
 * @returns {Text} Text component with page title text
 */
const Title = () => {
    return (
        <Text style={styles.textStyle}>More dogs please!</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        textTransform: 'lowercase',
        fontFamily: 'Avenir-Black',
        color: '#A63D40',
        letterSpacing: -3,
    }
})

export default Title;