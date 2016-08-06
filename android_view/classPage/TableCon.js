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

import   TableConCss  from   "./TableConCss";

export default class TableCon extends Component{
    render() {
        return (
            <View style={TableConCss.containerTable}>
                <Text style={this.props.style}>{this.props.num}</Text>
                <Text style={this.props.style}>{this.props.id}</Text>
                <Text style={this.props.style}>{this.props.rate}</Text>
                <Text style={this.props.style}>{this.props.max}</Text>
                <Text style={this.props.style}>{this.props.status}</Text>
                <Text style={this.props.style}>{this.props.changeTime}</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('TableCon', () => TableCon);

