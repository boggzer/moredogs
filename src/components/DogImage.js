import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

class DogImage extends Component {
    constructor(props) {
        super(props);

        this.controller = new AbortController();

        this.state = {
            imageURL: `https://dog.ceo/api/breed/${this.props.dogBreed}/images/random/`,
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    info={this.getDogImage}
                    source={ this.props.overlay == true ? this.props.source : { uri: this.state.imageURL } }
                    style={styles.ImageBackground}>
                    <View style={[styles.container, this.props.overlay == false ? !styles.overlay : styles.overlay]}>
                        {this.props.children}
                    </View>
                </ImageBackground>
            </View>
        )
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch(
            `https://dog.ceo/api/breed/${this.props.dogBreed}/images/random`,
            { signal: this.controller.signal });
        const json = await response.json();
        this.setState({
            imageURL: json.message,
        })
    }

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
// 'rgba( 255, 188, 181, 0.4 )'
export default DogImage;