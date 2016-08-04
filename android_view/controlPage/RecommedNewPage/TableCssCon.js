import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';

let TableCssCon = StyleSheet.create({
    containerTable: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        height: 40,
        backgroundColor: "#ddd",
        marginBottom: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    btnCon: {
        width: Dimensions.get('window').width/5,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: Dimensions.get('window').width/6,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#0187d6",
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        color: "white",
        textAlign: "center",
        textAlignVertical: "center"
    }

});
module.exports = TableCssCon;