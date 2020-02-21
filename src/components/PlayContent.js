import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';
import DogImage from './DogImage';

class PlayContent extends Component {
    constructor() {
        super();

        this.state = {
            imageURI: this.getURI,
            newImageCount: 1,
        }
    }

    returnToHome = () => {
        this.props.parentCallback(true);
    }

    fetchNewData() {
        this.refs.dogimage.fetchData();
    }

    render() {
        return (
            <>
                <DogImage ref='dogimage' changeImage={this.state} dogBreed={this.props.dogBreed} overlay={false} />
                <View style={styles.playButtons}>
                    <View style={styles.button}>
                        <Button color={Colors.MELON} title='another one, please!'
                            onPress={() => {
                                this.fetchNewData();
                            }} />
                    </View>
                    <View style={styles.button} backgroundColor={Colors.ALABASTER} >
                        <Button color={Colors.SMOKY_TOPAZ} title='go back'
                            onPress={() => {
                                this.returnToHome();
                                }} />
                    </View>
                </View>
            </>
        )
    }

    getURI() {
        return(
            { uri: 'https://source.unsplash.com/random/?' + JSON.stringify(this.props.dogBreed) + '=' + this.props.newImageCount }
        )
    }
}

const styles = StyleSheet.create({
    playButtons: {
        justifyContent: 'space-evenly',
        alignContent: 'center',
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
        height: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 60,
    },
    button: {
        backgroundColor: Colors.SMOKY_TOPAZ,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '45%',
        height: '100%',
    }
})

export default PlayContent;