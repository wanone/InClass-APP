import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';

import meCss         from    './meCss';
import applyCss      from    './applyCss';
import RowText       from    './RowText';
import MePage        from    './MePage';

export default class Profile extends Component {
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
               <Text style={meCss.styleLog}>{"个人信息"}</Text>
            </TouchableOpacity>
        );
    }
}
class logPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueName: '姓名',
            valueSchool: '学校',
            valueNumber: '学号',
            valueClass: '班级',
            valueIntroduction1: '个人介绍',
            valueIntroduction2: '',
            valueIntroduction3: '',
            valueIntroduction4: '',
        };
    }
    ChangeName(text){
        this.setState({valueName:text});
    }
    ChangeSchool(text){
        this.setState({valueNumber:text});
    }
    ChangeNumber(text){
        this.setState({valueNumber:text});
    }
    ChangeClass(text){
        this.setState({valueClass:text});
    }
    ChangeIntroduction1(text){
        this.setState({valueIntroduction1:text});
    }
    ChangeIntroduction2(text){
        this.setState({valueIntroduction2:text});
    }
    ChangeIntroduction3(text){
        this.setState({valueIntroduction3:text});
    }
    ChangeIntroduction4(text){
        this.setState({valueIntroduction4:text});
    }
    render() {
        valueName = this.state.valueName;
        valueNumber = this.state.valueNumber;
        valueClass = this.state.valueClass;
        valueSchool = this.state.valueSchool;
        valueIntroduction1 = this.state.valueIntroduction1;
        valueIntroduction2 = this.state.valueIntroduction2;
        valueIntroduction3 = this.state.valueIntroduction3;
        valueIntroduction4 = this.state.valueIntroduction4;
        valueIntroduction = valueIntroduction1 + valueIntroduction2 + valueIntroduction3 + valueIntroduction4;
        return (
            <View style={meCss.containerLSNew}>
                <View style={meCss.headIconNew}>
                    <TouchableOpacity style={meCss.backIcon}
                    onPress={()=>this.props.navigator.pop()}>
                        <Image source={require('./back.png')} style={meCss.backImg}/>
                    </TouchableOpacity>
                    <View style={meCss.headCon}>
                        <Text style={meCss.headTextNew}>{"个人信息"}</Text>
                    </View>
                </View>
                <View style={meCss.containerCon}>
                    <View style={applyCss.formRow}>
                        <Text style={applyCss.formText}>{"姓名:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="姓名"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeName(text)}/>

                        <Text style={applyCss.formText}>{"学校:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="学校"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeSchool(text)}/>

                    </View>
                    <View style={applyCss.formRow}>
                        <Text style={applyCss.formText}>{"班级:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="班级"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeClass(text)}/>
                        
                        <Text style={applyCss.formText}>{"学号:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="学号"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeNumber(text)}/>

                    </View>

                    <View style={applyCss.formRowCon}>
                        
                        <Text style={applyCss.formTextCon}>{"申请理由:"}</Text>
                        
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholder="个人介绍"
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeIntroduction1(text)}/>
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeIntroduction2(text)}/>
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeIntroduction3(text)}/>
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeIntroduction4(text)}/>
                        
                    </View>
                </View>
            </View>
        );
    }
};