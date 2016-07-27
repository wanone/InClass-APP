import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    BackAndroid
} from 'react-native';
import meCss         from    './meCss';
import RowText       from    './RowText';

export default class Exit extends Component {
    render() {
        return (
            <TouchableOpacity style={meCss.containerStyleTab}
            onPress={()=>BackAndroid.exitApp()}>
               <Text style={meCss.styleLog}>{"退出应用"}</Text>
            </TouchableOpacity>
        );
    }
}