import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import DogImage from './DogImage';
import PlayContent from './PlayContent';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            homeScreen: true,
            dogBreed: undefined,
        }
    }

    render() {
        return (
            this.renderContent()
        )
    }

    callBackFunction = (childData) => {
        this.setState({
            homeScreen: childData,
        })
    }

    renderContent() {
        return (
            <View style={styles.container}>
                {this.state.homeScreen == true && this.renderMainContent()
                    || this.state.homeScreen == false && <PlayContent parentCallback={this.callBackFunction} dogBreed={this.state.dogBreed} overlay={false} />}
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
                        <DogImage dogBreed={dogData.corgi} style={ styles.icon } source={dogIcons.corgi} overlay={true}>
                            <Text style={styles.dogImageText}>Corgi</Text>
                        </DogImage>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexFill}>
                    <TouchableOpacity activeOpacity={.5} style={styles.flexFill}
                        onPress={() =>
                            this.setState({ homeScreen: false, dogBreed: dogData.pug })
                        }>
                        <DogImage dogBreed={dogData.pug} source={dogIcons.pug} overlay={true}>
                            <Text style={styles.dogImageText}>Pug</Text>
                        </DogImage>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const dogData = {
    corgi: 'corgi',
    pug: 'pug'
}

const dogIcons = {
    corgi: require('../../assets/images/corgi.png'),
    pug: require('../../assets/images/pug.png'),
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
    dogImageText: {
        fontSize: 60,
        fontFamily: 'HelveticaNeue-Bold',
        textTransform: 'lowercase',
        color: 'rgb( 239, 233, 231 )',
        height: '50%',
    },
});

export default Main;