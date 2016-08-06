import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions
} from 'react-native';

import DropdownCss from "./DropdownCss";

export default class Dropdown extends Component{
    render() {
        return (
            <TouchableOpacity style={DropdownCss.containerSelectTab} onPress={this.props.open}>
                <View style={DropdownCss.containerSelectImg}>
                    <Image source={require('./class.png')} style={DropdownCss.backImg}/>
                </View>
                <Text style={DropdownCss.containerSelectText}>{this.props.buildingText}</Text>
                <View style={DropdownCss.containerSelectImg}>
                    <Image source={require('./triangle.png')} style={DropdownCss.triangleImg}/>
                </View>
            </TouchableOpacity>
        )
    }
}