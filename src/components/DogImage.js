import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

class DogImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground
                source={{ uri: 'https://source.unsplash.com/random/?' + JSON.stringify(this.props.dogBreed) }}
                style={styles.ImageBackground}>
                <View style={[styles.container, styles.overlay]}>
                    {this.props.children}
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba( 255, 188, 181, 0.4 )',
    }
})

export default DogImage;