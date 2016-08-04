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

import   TableCssCon  from   "./TableCssCon";

export default class TableCon extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={TableCssCon.containerTable}>
                <Text style={this.props.style}>{this.props.num}</Text>
                <Text style={this.props.style}>{this.props.place}</Text>
                <Text style={this.props.style}>{this.props.status}</Text>
                <Text style={this.props.style}>{this.props.time}</Text>
                <View style={TableCssCon.btnCon}>
                    <TouchableOpacity  style={TableCssCon.btn}  onPress={this.props.onPress}>
                        <Text style={TableCssCon.btnText}>{this.props.operate}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

