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

import   TableCssCon  from   "../TableCssCon";
import   ModalBox     from   "./ModalBox";

export default class TableCon2 extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ModalBox num={this.props.num} place={this.props.place}
            status={this.props.status} time={this.props.time}
            operate={this.props.operate}
            style={this.props.style}></ModalBox>
        )
    }
}

