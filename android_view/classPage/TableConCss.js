import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';
let TableCss = StyleSheet.create({
    containerTable: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        height: 40,
        marginBottom: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
});
module.exports = TableCss;