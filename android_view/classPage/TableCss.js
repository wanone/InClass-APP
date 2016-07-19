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
        backgroundColor: "red",
        marginBottom: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    containerTableCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/4,
        height: 40,
        padding: 5,
        color: "white",
        fontSize: 18,
        backgroundColor: "#0187d6",
        textAlign: "center",
        textAlignVertical: "center"
    },
    containerTableCell: {
        flexDirection: "row",
        width: Dimensions.get('window').width/4,
        height: 40,
        padding: 5,
        color: "white",
        fontSize: 16,
        backgroundColor: "green",
        textAlign: "center",
        textAlignVertical: "center"
    }
});
module.exports = TableCss;
/*                <Text>Selected provicne of Canada: {this.state.canada}</Text>*/