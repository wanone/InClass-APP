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

import   TableCon            from    './TableCon'; 
import   immutable           from    'immutable';

const  Row = ({num,id,rate,status,max,time}) => (
    <TableCon  num={num}  id={id}  rate={rate}  status={status}  max={max}  time={time}　style={styles.containerTableCellBlue}></TableCon>
)

const  renderRow = (rowData) => (
    <Row  num={rowData.get('num')}
          id={rowData.get('id')}
          rate={rowData.get('rate')}
          status={rowData.get('status')}
          max={rowData.get('max')}
          time={rowData.get('time')}/>
)

export default class YesBuildingNineA extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.getRecommendBuilding("building=9")),
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
                    array[i].rate=array[i].rate+"%";
                    if (Number(array[i].status) == 0){
                        array[i].status="关闭";
                    }else{
                        array[i].status="开启";
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
    render() {
        return (
            <View style={styles.contrainer}>
                <TableCon   num="序号"   id="教室号"  rate="占用率"  status="状态"  max="最大容量"  time="时间"  style={styles.containerTableCellHead}></TableCon>
                <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={renderRow}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1
    },    
    containerTableCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/6,
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
        width: Dimensions.get('window').width/6,
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
        width: Dimensions.get('window').width/6,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
    },
});


