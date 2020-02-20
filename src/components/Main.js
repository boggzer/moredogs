import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import DogImage from './DogImage';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeScreen: true,
            dogBreed: undefined,
        }
        this.render(this.state);
    }

    render() {
        return (
            this.renderContent()
        )
    }

    renderContent() {
        return (
            <View style={styles.container}>
                {this.state.homeScreen == true && this.renderMainContent()
                    || this.state.homeScreen == false && this.renderPlayContent()}
            </View>
        )
    }

    renderMainContent() {
        return (
            <>
                <View style={styles.flexFill}>
                    <TouchableOpacity title='corgi' activeOpacity={.5} style={styles.flexFill}
                        onPress={() =>
                            this.setState({ homeScreen: false, dogBreed: dogData.corgi })
                        }>
                        <DogImage dogBreed={dogData.corgi} >
                            <Text style={styles.dogImageText}>Corgi</Text>
                        </DogImage>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexFill}>
                    <TouchableOpacity activeOpacity={.5} style={styles.flexFill}
                        onPress={() =>
                            this.setState({ homeScreen: false, dogBreed: dogData.pug })
                        }>
                        <DogImage dogBreed={dogData.pug}>
                            <Text style={styles.dogImageText}>Pug</Text>
                        </DogImage>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    renderPlayContent() {
        const DogImage = () => { return (<DogImage dogBreed={this.state.dogBreed} overlay={false} refresh={false}/>) }
        DogImage.bind(this)

        return (
            <View style={styles.container}>
                <View style={styles.flexFill}>
                    <DogImage dogBreed={this.state.dogBreed} overlay={false} refresh={false}/>
                    <Text>{this}</Text>
                </View>
                <View style={styles.playButtons}>
                    <View style={styles.button}>
                        <Button color={Colors.MELON} title='another one, please!'
                            onPress={() => this.setState({ imageLink: this.get})} />
                    </View>
                    <View style={styles.button} backgroundColor={ Colors.ALABASTER } >
                        <Button color={Colors.SMOKY_TOPAZ} title='go back'
                            onPress={() => this.setState({ homeScreen: true })} />
                    </View>
                </View>
            </View>
        );
    }
}

const dogData = {
    corgi: 'corgi',
    pug: 'pug'
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        
        backgroundColor: 'rgb( 255, 188, 181 )',
    },
    flexFill: {
        flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
    },
    buttonStyle: {
        color: Colors.RAISIN_BLACK,
        backgroundColor: Colors.ALABASTER,
        width: '50%',
    },
    dogImageText: {
        fontSize: 60,
        fontFamily: 'HelveticaNeue-Bold',
        textTransform: 'lowercase',
        color: 'rgb( 239, 233, 231 )',
        height: '50%',
    },
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
});

export default Main;