import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    ScrollView
} from 'react-native';

import   classCss      from    "./classCss";
import   AllCss        from    './AllCss';
import   Table         from    './Table';
import   ModalBox      from    './ModalBox';
import   Button        from    'react-native-button';
import   Dropdown      from   './Dropdown'; 
import   DropdownNew   from   './DropdownNew'; 

export default class ControlPage extends Component{
    render() {
        var builds = new Array(); //server data
        builds = ["X1101教室1", "X1102教室", "X1103教室", "X1104教室", "X1105教室", "X1106教室", "X1107教室", "X1108教室", "X1109教室"]; 
        return (
            <View style={styles.contrainer}>
                <DropdownNew build={builds}></DropdownNew>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: "white",
    },
    contrainerDrop: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-144,
        backgroundColor: "red",
    },
    containerSelect: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-144,
        backgroundColor: "white",
    },
    containerSCon: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-214,
        backgroundColor: "red",
        marginTop: 10,
    }
});