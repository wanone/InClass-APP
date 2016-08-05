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
    ListView,
    TouchableHighlight
} from 'react-native';

import   TableCon3   from    './TableCon3'; 
import   Table       from    '../Table'; 

export default class YesBuildingThreeA extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            status: 1,
        };

    }
    convertTime(time){
        var date=new Date(time);
        var Y=date.getFullYear() + '-';
        var M=(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D=date.getDate() + ' ';
        var h=date.getHours() + ':';
        var m=date.getMinutes() + ':';
        var s=date.getSeconds();
        return  Y+M+D+h+m+s;
    }
    render() {
        var places = new Array();
        var nums = new Array();
        var statuses = new Array();
        var times = new Array();
        var operates = new Array();
        places = ["区域一", "区域二", "区域三", "区域四"];
        statuses = ["关闭", "开启", "关闭", "开启"];
        times = ["2016/04/11", "2016/04/12", "2016/04/13", "2016/04/14"];
        operates = ["开启","关闭","开启","关闭"];
        operates2 = ["更多","更多","更多","更多"];
        nums = [1, 2, 3, 4];
        return (
            <View style={styles.contrainer}>
                <Table   num="序号"   place="位置" status="状态"   time="更新时间"  operate="操作" style={styles.containerTableCellHead}></Table>
                <View style={styles.contrainerTab}>
                    <TableCon3  num={nums}  place={places}  status={statuses}  time={times}　operate={operates2} style={styles.containerTableCellBlue}></TableCon3>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        position: "absolute",
        zIndex: 100,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-194,
    },
    contrainerTab: {
        position: "absolute",
        zIndex: 100,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-234,
    },
    containerTableCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/5,
        height: 40,
        padding: 5,
        color: "white",
        fontSize: 16,
        backgroundColor: "#aaa",
        textAlign: "center",
        textAlignVertical: "center"
    },
    containerTableCellGray: {
        flexDirection: "row",
        width: Dimensions.get('window').width/5,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#eee",
    },
    containerTableCellBlue: {
        flexDirection: "row",
        width: Dimensions.get('window').width/5,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
    },
});


