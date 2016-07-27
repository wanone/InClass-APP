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
                <Text style={DropdownCss.containerSelectText}>{'提 交'}</Text>
            </View>
        )
    }
}