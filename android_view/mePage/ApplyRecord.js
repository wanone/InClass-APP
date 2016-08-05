import React, { Component } from 'react';
import {
    AppRegistry,
    styleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

import   meCss      from    './meCss';
import   Record     from    './Record';

export default class ApplyRecord extends Component {
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
               <Text style={meCss.styleLog}>{"申请记录"}</Text>
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
                        <Text style={meCss.headText}>{"申请记录"}</Text>
                    </View>
                </View>
                <View style={meCss.recordCon}>
                    <Record/>
                </View>
                <View style={meCss.placeCon}>
                    <Text style={meCss.remarkText}>{"向下滑动查看更多申请记录"}</Text>
                </View>
            </View>
        );
    }
};
