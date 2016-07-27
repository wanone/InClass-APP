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
import classPage     from   '../classPage/classPage';
import controlPage   from   '../controlPage/controlPage';
import mePage        from   '../mePage/mePage';
import ModalBox      from   './ModalBox';

export default class applyPage extends Component {
    _tabClass(type = 'Left') {
        this.props.navigator.push({
            component: classPage,
            type: type
        })
    }
    _tabApply(type = 'Right') {
        this.props.navigator.push({
            component: applyPage,
            type: type
        })
    }
    _tabControl(type = 'Right') {
        this.props.navigator.push({
            component: controlPage,
            type: type
        })
    }
    _tabMe(type = 'Right') {
        this.props.navigator.push({
            component: mePage,
            type: type
        })
    }
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
            <View style={styles.container}>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabClass('Left')}>
                        <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab, styles.applyTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </View>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabControl('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabMe('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/me.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'我'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={styles.containerCon}>
                    <View style={applyCss.headText}>
                        <Text style={applyCss.tabText}>{"教室借用申请表"}</Text>
                    </View>
                    <ModalBox></ModalBox>
                </View>

            </View>
        );
    }
}
