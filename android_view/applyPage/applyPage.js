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

import styles        from   '../common/commonCss';
import applyCss      from   './applyCss';
import ModalBox      from   './ModalBox';

export default class ApplyPage extends Component {
    constructor(props){
        super(props);
        this.state={
            valueName: '姓名',
            valueNumber: '学号',
            valueClass: '班级',
            valueID: '身份证',
            valueApplyTime: '申请时间',
            valueApplyReason1: '申请理由',
            valueApplyReason2: '',
            valueApplyReason3: '',
            valueApplyReason4: '',
            valueProveThing: '',
        };
    }
    ChangeName(text){
        this.setState({valueName:text});
    }
    ChangeNumber(text){
        this.setState({valueNumber:text});
    }
    ChangeClass(text){
        this.setState({valueClass:text});
    }
    ChangeID(text){
        this.setState({valueID:text});
    }
    ChangeApplyTime(text){
        this.setState({valueApplyTime:text});
    }
    ChangeApplyReason1(text){
        this.setState({valueApplyReason1:text});
    }
    ChangeApplyReason2(text){
        this.setState({valueApplyReason2:text});
    }
    ChangeApplyReason3(text){
        this.setState({valueApplyReason3:text});
    }
    ChangeApplyReason4(text){
        this.setState({valueApplyReason4:text});
    }
    ChangeProveThing(text){
        this.setState({valueProveThing:text});
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
        valueName = this.state.valueName;
        valueNumber = this.state.valueNumber;
        valueClass = this.state.valueClass;
        valueID = this.state.valueID;
        valueApplyTime = this.state.valueApplyTime;
        valueApplyReason1 = this.state.valueApplyReason1;
        valueApplyReason2 = this.state.valueApplyReason2;
        valueApplyReason3 = this.state.valueApplyReason3;
        valueApplyReason4 = this.state.valueApplyReason4;
        valueApplyReason = valueApplyReason1 + valueApplyReason2 + valueApplyReason3 + valueApplyReason4;
        valueProveThing = this.state.valueProveThing;
        return (
            <View style={PageCss.container}>
                <View style={applyCss.headText}>
                    <Text style={applyCss.tabText}>{"教室借用申请表"}</Text>
                </View>
                <ModalBox></ModalBox>
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