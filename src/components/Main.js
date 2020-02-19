import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
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
        return (
            <View style={styles.container}>
                <View style={styles.flexFill} on>
                    <DogImage dogBreed={ this.state.dogBreed } overlay={ false } />
                </View>
                <View color={Colors.RAISIN_BLACK} >
                    <Button title='Another one, please!' onPress={() => this.setState({ dogBreed: this.state.dogBreed })} />
                    <Button title='Go back' 
                        onPress={() =>
                        this.setState({ homeScreen: true })
                    } />
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
    },
    dogImageText: {
        fontSize: 60,
        fontFamily: 'HelveticaNeue-Bold',
        textTransform: 'lowercase',
        color: 'rgb( 239, 233, 231 )',
        height: '50%',
    }
});

export default Main;