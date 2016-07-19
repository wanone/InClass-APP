import React, { Component } from 'react';
import {
    AppRegistry,
    styleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import meCss      from  './meCss';
import TableCon   from  './TableCon';

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
                <View style={meCss.containerCon}>
                    <TableCon   seNum="序号"   time="申请时间"   condition="申请状态" remark="备注"   operate="操作"       style={meCss.containerTableConCellHead}></TableCon>
                    <TableCon   seNum="11010"  time="2016/3/15"  condition="成功"     remark="wanone" operate="查看 删除"  style={meCss.containerTableConCellGray}></TableCon>
                    <TableCon   seNum="11010"  time="2016/3/15"  condition="成功"     remark="wanone" operate="查看 删除"  style={meCss.containerTableConCellBlue}></TableCon>
                    <TableCon   seNum="11010"  time="2016/3/15"  condition="成功"     remark="wanone" operate="查看 删除"  style={meCss.containerTableConCellGray}></TableCon>
                    <TableCon   seNum="11010"  time="2016/3/15"  condition="成功"     remark="wanone" operate="查看 删除"  style={meCss.containerTableConCellBlue}></TableCon>
                    <TableCon   seNum="11010"  time="2016/3/15"  condition="成功"     remark="wanone" operate="查看 删除"  style={meCss.containerTableConCellGray}></TableCon>
                    <TableCon   seNum="11010"  time="2016/3/15"  condition="成功"     remark="wanone" operate="查看 删除"  style={meCss.containerTableConCellBlue}></TableCon>
                </View>
            </View>
        );
    }
};
