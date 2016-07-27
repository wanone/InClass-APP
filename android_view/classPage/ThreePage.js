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
    ScrollView
} from 'react-native';

import   AllCss              from    './AllCss';
import   Table               from    './Table'; 

export default class ThreePage extends Component{
    render() {
        return (
            <View style={styles.contrainer}>
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
                    <View style={styles.increaseCon}></View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
    },
});