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