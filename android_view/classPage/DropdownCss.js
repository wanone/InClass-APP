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
		width: Dimensions.get('window').width/2,
		height: 50,
		backgroundColor: "white",
		paddingLeft: 20,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		borderRadius: 15
	},
	containerSelectText: {
		width: Dimensions.get('window').width/3,
		height: 30,
		fontSize: 18,
		color: "#0187d6"
	},
	selectImg: {
		width: 20,
		height: 20,
		resizeMode: "contain"
	}

});
module.exports = DropdownCss;
/*                <Text>Selected provicne of Canada: {this.state.canada}</Text>*/