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

import   AllCss              from    './AllCss';
import   Table               from    './Table'; 
import   immutable           from    'immutable';

const  Row = ({num,id,rate,pick_time}) => (
    <Table  num={num}  id={id}  rate={rate}  pick_time={pick_time}　style={AllCss.containerTableCellBlue}></Table>
)

const  renderRow = (rowData) => (
    <Row  num={rowData.get('num')}
          id={rowData.get('id')}
          rate={rowData.get('rate')}
          pick_time={rowData.get('pick_time')}/>
)

export default class YesBuildingSeven extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.getRecommendBuilding("building=7")),
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
        var baseurl="http://123.207.6.76/inclass/api/classroom/getrecommendbybuilding?";
        var urlNew=baseurl + url; 
        var datas = new Array();
        fetch(urlNew)
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body;
                for(var i=0; i<array.length; i++ ){
                    array[i].num=i+1;
                    array[i].rate=array[i].rate+"%";
                    array[i].pick_time=this.convertTime(array[i].pick_time);
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
                <Table   num="序号"   id="教室号"  rate="占用率"  pick_time="时间"  style={AllCss.containerTableCellHead}></Table>
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
    }
});


