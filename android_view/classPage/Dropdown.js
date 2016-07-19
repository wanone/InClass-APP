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
class Dropdown extends Component{
    render() {
        return (
            <View style={DropdownCss.containerSelect}>
                <View style={DropdownCss.containerSelectTab}>
                   <Text style={DropdownCss.containerSelectText}>{'第一教学楼'}</Text>
                   <Image source={require('./start.png')} style={DropdownCss.selectImg}/>
                </View>
            </View>
        )
    }
}
module.exports = Dropdown;