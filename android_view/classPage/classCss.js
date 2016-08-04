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
/*this.getData("http://123.207.6.76/inclass/api/classroom/getrecommendbybuilding?building=1")countries.toArray()
                    switch(array[i].building){
                        case 1: this.setState({OnePageRR:true});alert(this.state.OnePageRR);break;
                        case 2: this.setState({TwoPageRR:true});break;
                        case 3: this.setState({ThreePageRR:true});break;
                        case 4: this.setState({FourPageRR:true});break;
                        case 5: this.setState({FivePageRR:true});break;
                        case 6: this.setState({SixPageRR:true});break;
                        case 7: this.setState({SevenPageRR:true});break;
                        case 8: this.setState({EightPageRR:true});break;
                        default: this.setState({NinePageRR:true});
                    }*/