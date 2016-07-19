/*
* InClass APP Code
* author:wanyinjun  Email:848540294@qq.com
* date:2016/7/13
*/
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
    Dimensions
} from 'react-native';

import   styles           from  './android_view/common/commonCss';
import   applyCss         from  './android_view/applyPage/applyCss';
import   classCss         from  './android_view/classPage/classCss';
import   controlCss       from  './android_view/controlPage/controlCss';
import   meCss            from  './android_view/mePage/meCss';
import   LogSign          from  './android_view/common/LogSign';

class inclass extends Component {
    /*
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
      return <route.component navigator={navigator}  {...route.passProps} />;
    }
    configureScene(route, routeStack) {
        if (route.type == 'Right') {
            return Navigator.SceneConfigs.PushFromRight; // 底部弹出
        }
        return Navigator.SceneConfigs.FloatFromBottomAndroid; // 右侧弹出
    }
    render() {
        return (
            <Navigator
            style={{flex:1}}
            initialRoute={{component: LogSign}}
            configureScene={this.configureScene}
            renderScene={this.renderScene}/>
        );
    }
}

AppRegistry.registerComponent('inclass', () => inclass);