import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class DogImage extends Component {
    constructor({...props}) {
        super({props});

        // const imageSource = this.props;
    }

    render() {
        return (
            <>
                <Text>Hola</Text>
                <Image source={{ uri: this.imageSource }}></Image>
            </>
        )
    }
}
/*
const DogImage = ({children, props}) => {
    return (
        <View>
            <Image source={{uri:'https://source.unsplash.com/random/?' + props}} style={{width: 100, height: 100}}></Image>
    <Text>{props} {children} Hello</Text>
        </View>
    );
}*/

export default DogImage;