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
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';

import  styles      from  './commonCss';
import  homePage    from  './homePage';

export default class LogSign extends Component {
    _navigate(type = 'Normal') {
        this.props.navigator.push({
            component: logPage2,
            type: type
        })
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
    }
    getData(){
        fetch('http://222.18.57.22/inclass/api/classroom/getbuildings')
            .then((response) => response.text())
            .then((responseText) => {
                alert(responseText);
            })
            .catch((error) => {
                alert("error");
            });
    }
    getD(){
        alert("hello1");
        /*getData('http://222.18.57.22/inclass/api/classroom/getbuildings/')*/
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./commonImg/start.png')} style={styles.bgColor}>
                    <View style={styles.logBox}>
                        <TouchableOpacity style={styles.containerStyleLog}
                        onPress={()=>this._navigate('Right')}>
                           <Text style={styles.styleLog}>{'登录'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerStyleSign}
                        onPress={()=>this.getData()}>
                          <Text style={styles.styleSign}>{'注册'}</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}
class logPage2 extends Component {
    constructor(props){
        super(props);
        this.state={
          valueUser: '用户名',
          valuePass: '******'
        };
    }
    onChangeText(text){
        this.setState({valueUser:text});
    }
    handleChange(text){
        this.setState({valuePass:text});
    }
    render() {
        valueUser = this.state.valueUser;
        valuePass = this.state.valuePass;
        return (
            <View style={styles.containerLS}>
                <Image source={require('./commonImg/logsign.png')} style={styles.bgColor}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity style={styles.backIcon}
                        onPress={()=>this.props.navigator.pop()}>
                            <Image source={require('./commonImg/back.png')} style={styles.backImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logPanel}>

                        <TextInput
                        style={styles.textinput}
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        value={valueUser}
                        onChangeText={ (text) => this.onChangeText(text)}/>

                        <TextInput
                        style={styles.textinput}
                        placeholderTextColor="#ccc"
                        secureTextEntry={true}
                        multiline = {false}
                        value={valuePass}
                        onChangeText={ (text) => this.handleChange(text)}/>

                    </View>
                    <View style={styles.sureIcon}>
                        <TouchableOpacity style={styles.logBtn}
                        onPress={()=>{
                            this.props.navigator.push({
                                component: homePage,
                            });
                        }}>
                            <Text style={styles.styleLog}>{'登 录'}</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
};
