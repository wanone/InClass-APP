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

import   classCss   from    "./classCss";
import   AllCss     from    './AllCss';
import   Table      from    './Table';
import   ModalBox   from    './ModalBox';
import   Button     from    'react-native-button';
import   Dropdown   from    './Dropdown'; 


export default class RecommendPage extends Component{
    render() {
        return (
            <View style={styles.contrainer}>
                <ModalBox></ModalBox>
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