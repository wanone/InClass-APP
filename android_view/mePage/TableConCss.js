import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';

let TableConCss = StyleSheet.create({
    containerTableCon: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        height: 50,
        marginBottom: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    
});
module.exports = TableConCss;
/*                <Text>Selected provicne of Canada: {this.state.canada}</Text>*/