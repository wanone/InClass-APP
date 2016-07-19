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

import TableConCss from "./TableConCss";
import meCss       from "./meCss";

class TableCon extends Component{
    render() {
        return (
            <View style={meCss.containerTableCon}>
                <Text style={this.props.style}>{this.props.seNum}</Text>
                <Text style={this.props.style}>{this.props.time}</Text>
                <Text style={this.props.style}>{this.props.condition}</Text>
                <Text style={this.props.style}>{this.props.remark}</Text>
                <Text style={this.props.style}>{this.props.operate}</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('TableCon', () => TableCon);
module.exports = TableCon;
