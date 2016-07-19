import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';

let applyCss = StyleSheet.create({
    headText: {
		width: Dimensions.get('window').width,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#0187d6",
	},
	tableContainer: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height-168,
        position: "relative"
	},
	tabText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
		textAlignVertical: "center"
	},
	textInput: {
		width: Dimensions.get('window').width/2-50,
		height: 50,
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
    },
    formRow: {
    	width: Dimensions.get('window').width,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
      　alignItems: "center",
    },
    formText: {
    	width: 50,
		height: 40,
		fontSize: 16,
		textAlign: "center",
		textAlignVertical: "center",
		color: "white",
		backgroundColor: '#0187d6'
    },
    formTextTime: {
    	width: 100,
		height: 40,
		fontSize: 16,
		textAlign: "center",
		textAlignVertical: "center",
		color: "white",
		backgroundColor: '#0187d6'
    },
    textInputTime: {
		width: Dimensions.get('window').width-100,
		height: 50,
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
    },
    formRowCon: {
    	width: Dimensions.get('window').width,
		height: 200,
		justifyContent: "center",
      　alignItems: "center",
    },
    formTextCon: {
    	width: 50,
		height: 190,
		fontSize: 16,
		position: "absolute",
		left: 0,
		top: 5,
		color: "white",
		backgroundColor: '#0187d6'
    },
    textInputCon: {
		width: Dimensions.get('window').width-50,
		marginLeft: 50,
		height: 50,
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
    },
    sureIcon: {
        width: 250,
        position: "absolute",
        bottom: 5,
        justifyContent: "center",
      　alignItems: "center",
        left: Dimensions.get('window').width/2,
        marginLeft: -125,
        backgroundColor: "#0187d6",
        borderRadius:10
    },
    logBtn: {
        padding: 10, 
        height: 45, 
        width: 250, 
        justifyContent: "center",
        alignItems: "center",
        overflow:'hidden', 
        borderRadius:10, 
        backgroundColor: '#0187d6'
    },
    styleLog:{
      　fontSize: 20, 
      　color: 'white'
    },

});
module.exports = applyCss;