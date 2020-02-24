import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DogImage from './DogImage';
import PlayContent from './PlayContent';

/** Main content component */
class Main extends Component {
    constructor() {
        super();
        this.state = {
            homeScreen: true,
            dogBreed: undefined,
        }
    }

    /** @returns {View} Component with screen content. */
    render() {
        return (
            this.renderContent()
        )
    }

    /** 
     * Callback function used by PlayContent component.
     * The function sets whether home screen should show or not.
     * Used when user presses on 'go back' on play screen.
     * */
    callBackFunction = (childData) => {
        this.setState({
            homeScreen: childData,
        })
    }

    /** 
     * Renders the appropriate content depending on whether homeScreen prop is true|false.
     * @returns {View|PlayContent} Component with either home screen content or play screen content. 
     * */
    renderContent() {
        return (
            <View style={styles.container}>
                {
                    this.state.homeScreen == true && this.renderMainContent() || 
                    this.state.homeScreen == false && 
                        <PlayContent 
                            parentCallback={this.callBackFunction} 
                            dogBreed={this.state.dogBreed} 
                            overlay={false} 
                        />
                }
            </View>
        )
    }

    /**
     * Renders Main content (home screen)
     * @returns {View} Component with all home screen content, except for Header and Footer.
     */
    renderMainContent() {
        return (
            <>
                <View style={styles.flexFill}>
                    <TouchableOpacity title='corgi' activeOpacity={.5} style={styles.flexFill}
                        onPress={() =>
                            this.setState({ 
                                homeScreen: false, 
                                dogBreed: dogData.corgi })
                        }>
                        <DogImage dogBreed={dogData.corgi} source={dogIcons.corgi} overlay={true}>
                            <Text style={styles.dogImageText}>Corgi</Text>
                        </DogImage>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexFill}>
                    <TouchableOpacity activeOpacity={.5} style={styles.flexFill}
                        onPress={() =>
                            this.setState({ 
                                homeScreen: false, 
                                dogBreed: dogData.pug })
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