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
    ScrollView,
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';

import  styles        from   '../common/commonCss';
import  controlCss    from   './controlCss';
import  classPage     from   '../classPage/classPage';
import  applyPage     from   '../applyPage/applyPage';
import  mePage        from   '../mePage/mePage';
import  TableCon      from   './TableCon';

export default class controlPage extends Component {
    _tabClass(type = 'Left') {
        this.props.navigator.push({
            component: classPage,
            type: type
        })
    }
    _tabApply(type = 'Left') {
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
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabApply('Left')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab, styles.controlTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </View>
    
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
                     <View style={controlCss.headText}>
                        <Text style={controlCss.tabText}>{"X11010教室"}</Text>
                    </View>
                    <View style={controlCss.tableContainer}>
                        <TableCon num="编号" place="位置"  condition="状态" conditionTime="状态变更时间" mode="人控模式" operate="操作" remark="备注" style={controlCss.containerTableConCellHead}></TableCon>
                        <ScrollView style={controlCss.scrollCon} showsVerticalScrollIndicator = {false}>
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon>
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon>
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon>
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon> 
                            <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon>
                        </ScrollView> 
                    </View>
                </View>
            </View>
        );
    }
}

