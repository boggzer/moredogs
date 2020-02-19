import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './Title';
import Description from './Description';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Title />
            <Description />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'space-evenly',
        backgroundColor: 'yellow'
    }
})

export default Header;