import React, { Component } from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import Colors from '../constants/colors';

/** Footer component */
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false,
        }
    }

    /** 
     * Renders Footer component.
     * When unclicked, renders just a tab with 'about' text.
     * When clicked (touched), slides up a panel containing text.
     * @returns {SafeAreaView} Safe View component to fit iPhone X >.
    */
    render() {
        return (
            <SafeAreaView style={{backgroundColor: Colors.ALABASTER}}>
                <TouchableOpacity activeOpacity={.5}
                    onPress={() => {
                        this._panel.show(150);
                        this.setState({
                            isClicked: true
                        })
                    }}>
                    <Text style={[styles.headingStyle, styles.notClicked]}>
                        About
                    </Text>
                </TouchableOpacity>
                <SlidingUpPanel ref={c => this._panel = c}>
                    <TouchableOpacity activeOpacity={.5} style={styles.clicked}
                        onPress={() => {
                            this._panel.hide()
                            this.setState({ isClicked: false })
                        }}>
                        {this.footerInfo}
                    </TouchableOpacity>
                </SlidingUpPanel>
            </SafeAreaView>
        )
    }

    /**
     * Returns UI component containing text that shows up when 'about' tab is clicked.
     * @returns {View} View component with 'about' text content.
     */
    get footerInfo() {
        return (
            <View style={{ justifyContent: 'space-between', alignItems: 'center' }} ref={c => this._panel = c}>
                <Text style={styles.headingStyle}>about</Text>
                <Text style={styles.headingStyle}>boggzer @ github</Text>
                <Text style={styles.headingStyle}>icons by Those Icons and Vitaly Gorbachev @ flaticon</Text>
                <Image style={styles.icon} source={require('../../assets/images/close.png')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    notClicked: {
        bottom: 0,
        width: '100%',
        height: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.ALABASTER,
        zIndex: 1,
    },
    headingStyle: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.SMOKY_TOPAZ,
        fontFamily: 'Avenir-Black',
        textTransform: 'lowercase',
        lineHeight: 19,
    },
    clicked: {
        backgroundColor: Colors.RAISIN_BLACK,
        alignItems: 'center',
        height: 170,
        padding: 10,
        width: '100%',
        bottom: 0,
        zIndex: 3,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: Colors.SMOKY_TOPAZ,
        margin: 10,
    }
})

export default Footer;