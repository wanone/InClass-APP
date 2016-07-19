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
import TableConCss   from    './TableConCss';
import TableCon      from    './TableCon';

class LeftIcon extends Component {
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
            <TouchableOpacity style={meCss.containerStyleTab}
            onPress={()=>this._navigate('Right')}>
               <Text style={meCss.styleLog}>{"修改密码"}</Text>
            </TouchableOpacity>
        );
    }
}

/////////////////////////////////////////////// 登录注册填写界面
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
                        <Text style={meCss.headText}>{"修改密码"}</Text>
                    </View>
                </View>
                <View style={meCss.containerCon}>
                    <View style={meCss.form}>
                        <View style={meCss.formRow}>
                            <Text style={meCss.formText}>{"旧密码:"}</Text>
                            <TextInput
                            style={meCss.textInput}
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            value = "********"
                            onChangeText={ (text) => this.handleChange(text)}/>
                        </View>
                        <View style={meCss.formRow}>
                            <Text style={meCss.formText}>{"新密码:"}</Text>
                            <TextInput
                            style={meCss.textInput}
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            value = "********"
                            onChangeText={ (text) => this.handleChange(text)}/>
                        </View>
                        <View style={meCss.formRow}>
                            <Text style={meCss.formText}>{"再次输入:"}</Text>
                            <TextInput
                            style={meCss.textInput}
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            value = "********"
                            onChangeText={ (text) => this.handleChange(text)}/>
                        </View>
                    </View>
                    <View style={meCss.formSure}>
                        <TouchableOpacity style={meCss.logBtn}>
                            <Text style={meCss.styleLog}>{'提 交'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

module.exports = LeftIcon;