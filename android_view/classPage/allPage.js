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

import AllCss      from  './AllCss';
import Table       from  './Table';

export default class AllPage extends Component {
    render() {
        return (
            <View style={AllCss.containerLS}>
                <View style={AllCss.headIcon}>
                    <TouchableOpacity style={AllCss.backIcon}
                    onPress={()=>this.props.navigator.pop()}>
                        <Image source={require('./backBlue.png')} style={AllCss.backImg}/>
                    </TouchableOpacity>
                    <View style={AllCss.headCon}>
                        <Text style={AllCss.headText}>{"全部教室"}</Text>
                    </View>
                </View>
                <Table seNum="序号"   num="编号"  place="位置"  ratio="占用率" style={AllCss.containerTableCellHead}></Table>
                <ScrollView style={AllCss.scrollCon} showsVerticalScrollIndicator = {false}>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010107" num="11026" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010102" num="11021" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010103" num="11022" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010104" num="11023" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                    <Table seNum="010105" num="11024" place="X6405" ratio="80%"　  style={AllCss.containerTableCellGray}></Table>
                    <Table seNum="010106" num="11025" place="X6405" ratio="80%"　  style={AllCss.containerTableCellBlue}></Table>
                </ScrollView>
            </View>
        );
    }
};
