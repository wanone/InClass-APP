import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';

let controlCss = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative" 
    },
    headText: {
		width: Dimensions.get('window').width,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#0187d6'
	},
	tabText: {
		fontSize: 20,
		color: "white"
	},
	tableContainer: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height-168,
		marginTop: 10,
	},
	containerTableConCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/7,
        height: 50,
        padding: 5,
        color: "white",
        fontSize: 16,
        backgroundColor: "#aaa",
        textAlign: "center",
        textAlignVertical: "center"
    },
    containerTableConCellGray: {
        flexDirection: "row",
        width: Dimensions.get('window').width/7,
        height: 50,
        padding: 5,
        color: "#0187d6",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#eee",
    },
    containerTableConCellBlue: {
        flexDirection: "row",
        width: Dimensions.get('window').width/7,
        height: 50,
        padding: 5,
        color: "#0187d6",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
    }
});
module.exports = controlCss;