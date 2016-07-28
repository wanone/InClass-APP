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
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';

import  styles           from   '../common/commonCss';
import  meCss            from   './meCss';
import  ApplyRecord      from   './ApplyRecord';
import  ModifyPass       from   './ModifyPass';
import  SystemInform     from   './SystemInform';
import  Profile          from   './Profile';
import  Exit             from   './Exit';

export default class MePage extends Component {
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
    configureScene(route, routeStack) {
        if (route.type == "Right") {
            return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
        }
        return Navigator.SceneConfigs.PushFromLeft; // 左侧弹出
    }
    render() {
        return (
          <Navigator
            style={{flex:1}}
            initialRoute={{component: MePage}}
            configureScene={this.configureScene}
            renderScene={this.renderScene}/>
        );
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
        return true;
    };
    render() {
        return (
            <View style={PageCss.container}>
                <View style={meCss.portraitBg}>
                    <Image source={require('../common/commonImg/start.png')} style={meCss.portrait}/>
                </View>
                <View style={meCss.nameCon}>
                    <Text style={meCss.nameText}>{'Wanone, 你好'}</Text>
                </View>
                <View style={meCss.funcCon}>
                    <ApplyRecord navigator={this.props.navigator}></ApplyRecord>
                    <SystemInform navigator={this.props.navigator}></SystemInform>
                    <ModifyPass navigator={this.props.navigator}></ModifyPass>
                    <Profile navigator={this.props.navigator}></Profile>
                    <Exit></Exit>
                </View>
            </View>
        );
    }
}

let PageCss = StyleSheet.create({
    container: {
        position: "absolute",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-93,
    }
})