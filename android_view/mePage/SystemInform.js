import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import meCss         from    './meCss';
import RowText       from    './RowText';

export default class LeftIcon extends Component {
    _navigate(type = 'Normal') {
        this.props.navigator.push({
          component: logPage2,
          type: type
        });
    }
    render() {
        return (
            <TouchableOpacity style={meCss.containerStyleTab}
            onPress={()=>this._navigate('Right')}>
               <Text style={meCss.styleLog}>{"系统通知"}</Text>
            </TouchableOpacity>
        );
    }
}
class logPage2 extends Component {
    render() {
        return (
            <View style={meCss.containerLS}>
                <View style={meCss.headIcon}>
                    <TouchableOpacity style={meCss.backIcon}
                    onPress={()=>this.props.navigator.pop()}>
                        <Image source={require('./backBlue.png')} style={meCss.backImg}/>
                    </TouchableOpacity>
                    <View style={meCss.headCon}>
                        <Text style={meCss.headText}>{"系统通知"}</Text>
                    </View>
                </View>
                <View style={meCss.containerCon}>
                    <RowText text="系统通知系统通知系统通知系统通知系统通知"></RowText>
                    <RowText text="系统通知系统通知系统通知系统通知系统通知"></RowText>
                    <RowText text="系统通知系统通知系统通知系统通知系统通知"></RowText>
                    <RowText text="系统通知系统通知系统通知系统通知系统通知"></RowText>
                    <RowText text="系统通知系统通知系统通知系统通知系统通知"></RowText>
                </View>
            </View>
        );
    }
};