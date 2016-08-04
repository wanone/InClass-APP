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
} from 'react-native';

import  styles        from  './commonCss';
import  AppPage       from  './AppPage';
import  SuperApp      from  './SuperApp';

export default class homePage extends Component {
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
            initialRoute={{component: SuperApp}}
            configureScene={this.configureScene}
            renderScene={this.renderScene}/>
        );
    }
}
