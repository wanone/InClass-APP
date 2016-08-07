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

import    TableCon            from    './TableCon'; 
import    immutable           from    'immutable';
import    Tool                from    '../common/Tool';

const  Row = ({num, id, rate, max, status, changeTime}) => (
    <TableCon  num={num}  id={id}  rate={rate}  max={max}  status={status}  changeTime={changeTime}　style={styles.containerTableCellBlue}></TableCon>
)

const  renderRow = (rowData) => (
    <Row  num={rowData.get('num')}
          id={rowData.get('id')}
          rate={rowData.get('rate')}
          max={rowData.get('max')}
          status={rowData.get('status')}
          changeTime={rowData.get('changeTime')}/>
)

export default class YesBuildingFourA extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.getRecommendBuilding("building=1")),
            class404: false,
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
        var newurl =Tool.url();
        var baseurl=newurl+"api/classroom/selEctall?pageSize=10&requestPage=1&";
        var urlNew=baseurl + url; 
        var datas = new Array();
        fetch(urlNew)
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body.results;
                if (array.length == 0){
                    this.setState({class404: true});
                };
                for(var i=0; i<array.length; i++ ){
                    array[i].num=i+1;
                    if (typeof array[i].rate == "number"){
                        array[i].rate=array[i].rate+"%";
                    }
                    array[i].max=array[i].max+"人";
                    if (array[i].status == 1){
                        array[i].status="开放";
                    }else{
                        array[i].status="关闭";
                    }
                    if (typeof array[i].time == "number"){
                        array[i].changeTime=this.convertTime(array[i].time);
                    }else{
                        array[i].changeTime=array[i].time;
                    }
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
                <TableCon   num="序号"   id="教室号"  rate="占用率"  max="限满人数"  status="状态"  changeTime="更新时间"  style={styles.containerTableCellHead}></TableCon>
                {this.state.class404 ? <Image source={require('./class404.png')} style={styles.color404}/> : false}
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    color404: {
        marginTop: 30,
    },
    containerTableCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/6,
        height: 40,
        padding: 5,
        color: "white",
        fontSize: 15,
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
        fontSize: 15,
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
        fontSize: 15,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
    },
});


