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
export default class applyRecord extends Component {
    _navigate(type = 'Normal') {
        this.props.navigator.push({
          component: logPage2,
          type: type
        });
    }
    render() {
        return (
            <TouchableOpacity style={styles.containerStyleLog}
            onPress={()=>this._navigate('Right')}>
               <Text style={styles.styleLog}>{"申请记录"}</Text>
            </TouchableOpacity>
        );
    }
}
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