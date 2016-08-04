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
                <Text style={DropdownCss.containerSelectText}>{'X1101教室'}</Text>
                <View style={DropdownCss.containerSelectImg}>
                    <Image source={require('./triangle.png')} style={DropdownCss.triangleImg}/>
                </View>
            </View>
        )
    }
}