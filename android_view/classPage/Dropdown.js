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
            <View style={DropdownCss.containerSelectTab}>
                <View style={DropdownCss.containerSelectImg}>
                    <Image source={require('./class.png')} style={DropdownCss.backImg}/>
                </View>
                <Text style={DropdownCss.containerSelectText}>{'第一教学楼'}</Text>
                <View style={DropdownCss.containerSelectImg}>
                    <Image source={require('./triangle.png')} style={DropdownCss.triangleImg}/>
                </View>
            </View>
        )
    }
}