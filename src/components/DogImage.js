import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

/**
 * Component that renders (dog) images, both icons in home screen and play screen.
 */
class DogImage extends Component {
    constructor(props) {
        super(props);
        this.controller = new AbortController();
        this.state = {
            imageURL: `https://dog.ceo/api/breed/${this.props.dogBreed}/images/random/`,
        }
    }

    /**
     * Renders an image and text.
     * Image source depends on whether the 'overlay' style is applied or not.
     * If 'overlay', it means that the current view is home screen. Otherwise it's the play screen.
     * @returns {View} View component with image.
     */
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={
                        this.props.overlay == true ? 
                        this.props.source : { uri: this.state.imageURL } }
                    style={styles.ImageBackground}>
                    <View style={[
                            styles.container, 
                            this.props.overlay == false ? !styles.overlay : styles.overlay ]}>
                        {this.props.children}
                    </View>
                </ImageBackground>
            </View>
        )
    }

    /** Get a dog image from Dog API when mounted. */
    componentDidMount() {
        this.fetchData();
    }

    /** Fetch dog image from Dog API and set current DogImage url state. */
    fetchData = async () => {
        const response = await fetch(
            `https://dog.ceo/api/breed/${this.props.dogBreed}/images/random`,
            { signal: this.controller.signal });
        const json = await response.json();
        this.setState({
            imageURL: json.message,
        })
    }

    /** Cancel fetching. Had to add this to prevent errors when debugging. */
    componentWillUnmount(){
        this.controller.abort();
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

export default DogImage;