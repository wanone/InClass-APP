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

import   TableCon1   from    './TableCon1'; 
import   TableCon2   from    './TableCon2'; 
import   TableCon3   from    './TableCon3'; 
import   TableCon4   from    './TableCon4'; 
import   Table       from    './Table'; 

export default class YesBuildingOneA extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.getRecommendBuilding("building=1")),
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
    getRecommendBuilding(url){
        var baseurl="http://123.207.6.76/inclass/api/classroom/selectall?pageSize=10&requestPage=1&";
        var urlNew=baseurl + url; 
        var datas = new Array();
        fetch(urlNew)
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body.results;
                for(var i=0; i<array.length; i++ ){
                    array[i].num=i+1;
                    array[i].place="位置";
                    if (array[i].status == 0){
                        array[i].status="关闭";
                        array[i].operate="开启";
                    }else{
                        array[i].status="开启";
                        array[i].operate="关闭";
                    };
                    array[i].time=this.convertTime(array[i].time);
                    datas.push(array[i]);
                };
                datas = immutable.fromJS(datas);
                datas = datas.toArray();
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(datas),
                });
            }else{
                alert("request fail");
            }
        })
        .catch((error) => {
            console.warn(error);
        })
        return datas;
    }
    change(){
        
    }
    render() {
        var places = new Array();
        var statuses = new Array();
        var times = new Array();
        var operates = new Array();
        places = ["区域一", "区域二", "区域三", "区域四"];
        statuses = ["关闭", "开启", "关闭", "开启"];
        times = ["2016/04/11", "2016/04/12", "2016/04/13", "2016/04/14"];
        operates = ["开启","关闭","开启","关闭"];
        return (
            <View style={styles.contrainer}>
                <Table   num="序号"   place="位置" status="状态"   time="更新时间"  operate="操作" style={styles.containerTableCellHead}></Table>
                <View style={styles.contrainerTab}>
                    <TableCon1  num={1}  place={places[0]}  status={statuses[0]}  time={times[0]}　operate={operates[0]}  onPress={this.change.bind(this)}  style={styles.containerTableCellBlue}></TableCon1>
                    <TableCon2  num={2}  place={places[1]}  status={statuses[1]}  time={times[1]}　operate={operates[1]}  onPress={this.change.bind(this)}  style={styles.containerTableCellBlue}></TableCon2>
                    <TableCon3  num={3}  place={places[2]}  status={statuses[2]}  time={times[2]}　operate={operates[2]}  onPress={this.change.bind(this)}  style={styles.containerTableCellBlue}></TableCon3>
                    <TableCon4  num={4}  place={places[3]}  status={statuses[3]}  time={times[3]}　operate={operates[3]}  onPress={this.change.bind(this)}  style={styles.containerTableCellBlue}></TableCon4>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
    },
    contrainerTab: {
        flex: 1,
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


