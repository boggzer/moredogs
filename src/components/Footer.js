import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import Colors from '../constants/colors';

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isClicked: false,
        }
    }

    render() {
        return (
            <View style={[this.state.isClicked == false ? styles.notClicked : styles.clicked]}>
                    <TouchableOpacity activeOpacity={.5} style={styles.flexFill}
                        onPress={() => {
                            this.setState({
                                isClicked: true
                            })
                        }}>
                        <Text style={[styles.headingStyle,
                        this.state.isClicked == true ? styles.clickedText : !styles.clickedText]}>
                            About
                    </Text>
                    </TouchableOpacity>
                {this.state.isClicked == false ? null : this.footerInfo}
            </View>
        )
    }

    get footerInfo() {
        return (
            <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.headingStyle}>boggzer @ github</Text>
                <Text style={styles.headingStyle}>icons by Those Icons @ flaticon</Text>
                <TouchableOpacity activeOpacity={.5} style={styles.flexFill}
                    onPress={() => this.setState({ isClicked: false })}>
                    <Image style={styles.icon} source={require('../../assets/images/close.png')} onPress={() => alert('cc')} />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    notClicked: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.MELON,
    },
    headingStyle: {
        fontSize: 17,
        textAlign: 'center',
        color: Colors.SMOKY_TOPAZ,
        fontFamily: 'Avenir-Black',
        textTransform: 'lowercase',
    },
    textStyle: {
        fontFamily: 'Avenir',
    },
    clicked: {
        position: 'absolute',
        
        backgroundColor: Colors.RAISIN_BLACK,
        alignItems: 'center',
        height: 130,
        width: '100%',
        bottom: 0,
    },
    clickedText: {
        marginTop: 15,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: Colors.SMOKY_TOPAZ,
        margin: 10,
    }
})

export default Footer;