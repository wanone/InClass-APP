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
import TableCss from "./TableCss";
export default class Table extends Component{
    render() {
        return (
            <View style={TableCss.containerTable}>
                <Text style={this.props.style}>{this.props.seNum}</Text>
                <Text style={this.props.style}>{this.props.num}</Text>
                <Text style={this.props.style}>{this.props.place}</Text>
                <Text style={this.props.style}>{this.props.ratio}</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('Table', () => Table);

