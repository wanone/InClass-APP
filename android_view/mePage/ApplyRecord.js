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
    ListView
} from 'react-native';

import   meCss         from    './meCss';
import   Record        from    './Record';
import   immutable     from    'immutable';
import   Tool          from    '../common/Tool';

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

const  Row = ({num,name,classS,status,applyTime,dealTime,startTime,endTime}) => (
    <Record  num={num}  name={name}  classS={classS}  status={status}  applyTime={applyTime}　dealTime={dealTime} startTime={startTime} endTime={endTime}></Record>
)

const  renderRow = (rowData) => (
    <Row  num={rowData.get('num')}
          name={rowData.get('name')}
          classS={rowData.get('classS')}
          status={rowData.get('status')}
          applyTime={rowData.get('applyTime')}
          dealTime={rowData.get('dealTime')}
          startTime={rowData.get('startTime')}
          endTime={rowData.get('endTime')}/>
)

class logPage2 extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.getData),
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
    componentWillMount() {
        this.getData();
        console.disableYellowBox = true;
    }
    componentWillUnmount() {
        this.getData();
        console.disableYellowBox = true;
    }
    getData(){
        var datas = new Array();
        var url =Tool.url();
        fetch(url+"api/apply/selectBystu")
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body;
                for(var i=0; i<array.length; i++ ){
                    array[i].num=i+1;
                    array[i].name=array[i].studentName;
                    array[i].classS=array[i].classroomId+"教室";
                    if (array[i].checkStatus == 0){
                        array[i].status="未审核";
                    }else{
                        array[i].status="通过";
                    }
                    array[i].applyTime=this.convertTime(array[i].applyTime);
                    array[i].dealTime=this.convertTime(array[i].checkTime);
                    array[i].startTime=this.convertTime(array[i].startTime);
                    array[i].endTime=this.convertTime(array[i].endTime);
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
    delData(){
        var dataDel = new Array();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dataDel),
        })
    }
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
                    <View style={meCss.containerDel}>
                        <TouchableOpacity onPress={this.delData.bind(this)}>
                            <Text style={meCss.containerDelText}>{"清空"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={meCss.recordCon}>
                    
                    <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    showsVerticalScrollIndicator = {false}
                    renderRow={renderRow}/>

                </View>
                <View style={meCss.placeCon}>
                    <Text style={meCss.remarkText}>{"向下滑动查看更多申请记录"}</Text>
                </View>
            </View>
        );
    }
};
