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

import   immutable    from    'immutable';

var Tool = React.createClass({
    convertTime: function(time){
        var date=new Date(time);
        var Y=date.getFullYear() + '-';
        var M=(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D=date.getDate() + ' ';
        var h=date.getHours() + ':';
        var m=date.getMinutes() + ':';
        var s=date.getSeconds();
        return  Y+M+D+h+m+s;
    },
    getData: function(url){
        var datas = new Array();
        fetch(url)
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
});


module.exports = Tool;