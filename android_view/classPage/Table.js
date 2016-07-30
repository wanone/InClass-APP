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
                <Text style={this.props.style}>{this.props.num}</Text>
                <Text style={this.props.style}>{this.props.id}</Text>
                <Text style={this.props.style}>{this.props.rate}</Text>
                <Text style={this.props.style}>{this.props.pick_time}</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('Table', () => Table);

