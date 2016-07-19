import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';

let classCss = StyleSheet.create({
	headText: {
		width: Dimensions.get('window').width,
		height: 50,
		justifyContent: "center",
		alignItems: "center"
	},
	containerStyleTab: {
		width: Dimensions.get('window').width/4,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	twoTab: {
		width: Dimensions.get('window').width,
		paddingLeft: Dimensions.get('window').width/4,
		paddingRight: Dimensions.get('window').width/4,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#0187d6'
	},
	selectTab: {
		width: Dimensions.get('window').width,
		height: 70,
	},
	tabText: {
		fontSize: 20,
		color: "white"
	}
});
module.exports = classCss;
/*                <Text>Selected provicne of Canada: {this.state.canada}</Text>*/