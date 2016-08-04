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
		height: 50,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: Dimensions.get('window').width*0.2,
		backgroundColor: "#0187d6",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 15
	},
	containerSelectImg: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	containerSelectText: {
		fontSize: 20,
		color: "white"
	},
	backImg: {
        width: 25,
        height: 28,
    },
    triangleImg: {
        width: 15,
        height: 15
    }
});

module.exports = DropdownCss;
/*                {
                    this.state.Building1 == true ? <YesBuildingOne   num={1}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building2 == true ? <YesBuildingTwo   num={2}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building3 == true ? <YesBuildingThree num={3}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building4 == true ? <YesBuildingFour  num={4}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building5 == true ? <YesBuildingFive  num={5}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building6 == true ? <YesBuildingSix   num={6}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building7 == true ? <YesBuildingSeven num={7}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building8 == true ? <YesBuildingEight num={8}  closeModal={this.close.bind(this)}/> : false
                }
                {
                    this.state.Building9 == true ? <YesBuildingNine  num={9}  closeModal={this.close.bind(this)}/> : false
                }*/