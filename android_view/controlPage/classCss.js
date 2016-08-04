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
/*                <View style={styles.contrainerClass}>
                {this.state.YesBuildingOne ? <YesBuildingOne/> : false}
                {this.state.YesBuildingTwo ? <YesBuildingTwo/> : false}
                {this.state.YesBuildingThree  ? <YesBuildingThree/> : false}
                {this.state.YesBuildingFour ? <YesBuildingFour/> : false}
                {this.state.YesBuildingFive ? <YesBuildingFive/> : false}
                {this.state.YesBuildingSix ? <YesBuildingSix/> : false}
                {this.state.YesBuildingSeven ? <YesBuildingSeven/> : false}
                {this.state.YesBuildingEight ? <YesBuildingEight/> : false}
                {this.state.YesBuildingNine ? <YesBuildingNine/> : false}
                </View>
               this.show(this.state.dropdownSelection);
                   clearCon() {
        this.setState({YesBuildingOne : false});
        this.setState({YesBuildingTwo : false});
        this.setState({YesBuildingThree : false});
        this.setState({YesBuildingFour : false});
        this.setState({YesBuildingFive : false});
        this.setState({YesBuildingSix : false});
        this.setState({YesBuildingSeven : false});
        this.setState({YesBuildingEight : false});
        this.setState({YesBuildingNine : false});
    }
    show1(){
        this.clearCon();
        this.setState({YesBuildingOne : true});
    }
    show2(){
        this.clearCon();
        this.setState({YesBuildingTwo : true});
    }
    show3(){
        this.clearCon();
        this.setState({YesBuildingThree : true});
    }
    show4(){
        this.clearCon();
        this.setState({YesBuildingFour : true});
    }
    show5(){
        this.clearCon();
        this.setState({YesBuildingFive : true});
    }
    show6(){
        this.clearCon();
        this.setState({YesBuildingSix : true});
    }
    show7(){
        this.clearCon();
        this.setState({YesBuildingSeven : true});
    }
    show8(){
        this.clearCon();
        this.setState({YesBuildingEight : true});
    }
    show9(){
        this.clearCon();
        this.setState({YesBuildingNine : true});
    }*/