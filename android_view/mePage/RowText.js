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
import meCss   from  "./meCss"
export default class RowText extends Component{
    render() {
        return (
            <View style={meCss.rowInform}>
                <Text style={meCss.rowText}>{this.props.text}</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('RowText', () => RowText);
