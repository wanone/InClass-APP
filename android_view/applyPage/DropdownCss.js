import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';
let DropdownCss = StyleSheet.create({
	containerSelect: {
		width: Dimensions.get('window').width,
		height: 70,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	containerSelectTab: {
		width: Dimensions.get('window').width*0.6,
		height: 40,
		marginTop: 50,
		marginLeft: Dimensions.get('window').width*0.2,
		backgroundColor: "#0187d6",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15
	},
	containerSelectText: {
		fontSize: 20,
		color: "white"
	}
});
module.exports = DropdownCss;
