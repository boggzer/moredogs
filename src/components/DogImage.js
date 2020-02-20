import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Colors from '../constants/colors';

class DogImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageLink: this.getURI,
            refresh: false,
        }
    }

    render() {
        return (
            <ImageBackground
                source={ this.state.imageLink ? this.state.imageLink : this.getURI }
                style={styles.ImageBackground}>
                <View style={[styles.container, this.props.overlay == false ? !styles.overlay : styles.overlay] }>
                    { this.props.children }
                </View>
            </ImageBackground>
        )
    }

    get getURI() {
        return (
            { uri: 'https://source.unsplash.com/random/?' + JSON.stringify(this.props.dogBreed) }
            
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
        backgroundColor: `${Colors.MELON}70`,
    }
})
// 'rgba( 255, 188, 181, 0.4 )'
export default DogImage;