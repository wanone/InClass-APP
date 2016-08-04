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

import TableCssCon  from "./TableCssCon";

export default class TableCon extends Component{
    render() {
        return (
            <View style={TableConCss.containerTableCon}>
                <Text style={this.props.style}>{this.props.num}</Text>
                <Text style={this.props.style}>{this.props.place}</Text>
                <Text style={this.props.style}>{this.props.condition}</Text>
                <Text style={this.props.style}>{this.props.conditionTime}</Text>
                <Text style={this.props.style}>{this.props.mode}</Text>
                <Text style={this.props.style}>{this.props.operate}</Text>
                <Text style={this.props.style}>{this.props.remark}</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('TableCon', () => TableCon);
