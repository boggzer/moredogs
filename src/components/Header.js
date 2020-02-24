import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Title from './Title';
import Description from './Description';

/** 
 * Render Header with Title and Description.
 * SafeAreaView is used to fit iPhone X and up.
*/
const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Title />
            <Description />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFBCB5',
    }
})

export default Header;