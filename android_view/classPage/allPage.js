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
    ScrollView,
} from 'react-native';

import allCss      from  './allCss';
import Table       from  './Table';
export default class allPage extends Component {
    render() {
        return (
            <View style={allCss.containerLS}>
                <View style={allCss.headIcon}>
                    <TouchableOpacity style={allCss.backIcon}
                    onPress={()=>this.props.navigator.pop()}>
                        <Image source={require('./backBlue.png')} style={allCss.backImg}/>
                    </TouchableOpacity>
                    <View style={allCss.headCon}>
                        <Text style={allCss.headText}>{"全部教室"}</Text>
                    </View>
                </View>
                <Table seNum="序号"   num="编号"  place="位置"  ratio="占用率" style={allCss.containerTableCellHead}></Table>
                <ScrollView style={allCss.scrollCon} showsVerticalScrollIndicator = {false}>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={allCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={allCss.containerTableCellBlue}></Table>
                </ScrollView>
            </View>
        );
    }
};
