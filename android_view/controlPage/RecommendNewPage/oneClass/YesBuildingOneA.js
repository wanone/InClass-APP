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
import   Table       from    '../Table'; 
import   Tool        from    '../Tool'; 

export default class YesBuildingOneA extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            status: 1,
            statuses: "",
            times: "",
            places: "",
        };

    }
    componentWillMount() {
        this.getData();
    }
    componentWillUnmount() {
        this.getData();
    }
    getData(){
        setInterval( () => {
            var statusesS = new Array();
            var timesS = new Array();
            var array = new Array();
            var lightS = new Array();
            var placesS = new Array();
            var url = Tool.url();
            fetch(url+"api/light/getcontrollightsbystu")
            .then((response) => response.text())
            .then((responseText) => {
                var data = JSON.parse(responseText);
                if (data.status == 0){
                    var array = data.body[0].lights;
                    for(var i=0; i<array.length; i++ ){
                        if (array[i].status == 0){
                            statusesS.push("关闭");
                        }else{
                            statusesS.push("开启");
                        };
                        array[i].time=this.convertTime(array[i].time);
                        timesS.push(array[i].time);
                        placesS.push(array[i].id);
                    };
                    this.setState({statuses: statusesS});
                    this.setState({times: timesS});
                    this.setState({places: placesS});
                }else{
                    alert("request fail");
                }
            })
            .catch((error) => {
                console.warn(error);
            })
        }, 3000)
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
        operates2 = ["更多","更多","更多","更多"];
        nums = [1, 2, 3, 4];
        return (
            <View style={styles.contrainer}>
                <Table   num="序号"   place="位置" status="状态"   time="更新时间"  operate="操作" style={styles.containerTableCellHead}></Table>
                <View style={styles.contrainerTab}>
                    <TableCon1  num={nums}  place={this.state.places}  status={this.state.statuses}  time={this.state.times}　operate={operates2} style={styles.containerTableCellBlue}></TableCon1>
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


