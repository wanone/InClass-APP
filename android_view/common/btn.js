/*
* 按钮组件
*/
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
var styles = StyleSheet.create({
    container:{
        display: flex,
        justifyContent: center,
        alignItems: center,
        width: 50,
        height: 30,
        backgroundColor: {this.props.bgColor}
    },
    text:{
        color: {this.props.textColor},
        fontSize: 16
    }
})
export default class Btn extends Component {
    render() {
        return (
        	<View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}