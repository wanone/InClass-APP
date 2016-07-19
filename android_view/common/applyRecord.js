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
import styles      from  './commonCss';


class applyRecord extends Component {
/**
* 给Navigator传递参数
* @param name 参数
* @private
*/
    _navigate(type = 'Normal') {
        this.props.navigator.push({
          component: logPage2,
          type: type
        });
    }
    render() {
        // 点击按钮使用Home页面入栈
        return (
            <TouchableOpacity style={styles.containerStyleLog}
            onPress={()=>this._navigate('Right')}>
               <Text style={styles.styleLog}>{"申请记录"}</Text>
            </TouchableOpacity>
        );
    }
}

/////////////////////////////////////////////// 登录注册填写界面
class logPage2 extends Component {
    render() {
        return (
            <View style={styles.containerLS}>
                <View style={styles.headIcon}>
                    <TouchableOpacity style={styles.backIcon}
                    onPress={()=>this.props.navigator.pop()}>
                        <Image source={require('./commonImg/back.png')} style={styles.backImg}/>
                    </TouchableOpacity>
                    <View></View>
                </View>
            </View>
        );
    }
};

module.exports = applyRecord;