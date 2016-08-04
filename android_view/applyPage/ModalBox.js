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

import  Button     from  'react-native-button';
import  Modal      from  'react-native-modalbox';
import  Slider     from  'react-native-slider';
import  Dropdown   from  './Dropdown';
import  applyCss   from  './applyCss';

var window  = Dimensions.get('window');
var styles  = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal2: {
        height: 230,
        backgroundColor: "#3B5998"
    },
    modal3: {
        height: 300,
        width: 300
    },  
    modal4: {
        width: Dimensions.get('window').width*0.9,
        height: 295,
        borderRadius: 10,
    },
    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },
    btnModal: {
         position: "absolute",
         top: 0,
         right: 0,
         width: 50,
         height: 50,
         backgroundColor: "transparent"
    },
    text: {
        color: "black",
    },
    containerStyleTab:{
        height: 35, 
        marginBottom: 5,
        width: Dimensions.get('window').width/2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    styleLog:{
      　fontSize: 18, 
      　color: '#0079c1'
    },
    tableContainer: {
        flex: 1,
        position: "relative",
        marginTop: 10,
        marginBottom: 30
    },
    classContainer: {
        flex: 1,
        position: "absolute",
        top: 0,
    }
});
var ModalBox = React.createClass({
    getInitialState(){
        return {
            isOpen: false,
      　    isDisabled: false,
      　    swipeToClose: true,
      　    sliderValue: 0.3,
            valueName: '姓名',
            valueNumber: '学号',
            valueClass: '班级',
            valueID: '身份证',
            valueApplyReason1: '申请理由',
            valueApplyReason2: '',
            valueApplyReason3: '',
            valueApplyReason4: '',
            valueStartTime: "",
            valueEndTime: ""
        }
    },
    openModal1(id) {
        this.refs.modal1.open();
    },
    openModal2(id) {
        this.refs.modal2.open();
    },
    openModal3(id) {
        this.refs.modal3.open();
    },
    openModal4(id) {
        this.refs.modal4.open();
    },
    openModal5(id) {
        this.setState({isOpen: true});
    },
    closeModal5(id) {
        this.setState({isOpen: false});
    },
    openModal6(id) {
        this.refs.modal6.open();
    },
    toggleDisable() {
        this.setState({isDisabled: !this.state.isDisabled});
    },
    toggleSwipeToClose() {
        this.setState({swipeToClose: !this.state.swipeToClose});
    },
    onClose() {
        console.log('Modal just closed');
    },
    onOpen() {
        console.log('Modal just openned');
    },
    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    },
    ChangeName(text){
        this.setState({valueName:text});
    },
    ChangeNumber(text){
        this.setState({valueNumber:text});
    },
    ChangeClass(text){
        this.setState({valueClass:text});
    },
    ChangeID(text){
        this.setState({valueID:text});
    },
    ChangeStartTime(text){
        this.setState({valueStartTime:text});
    },
    ChangeEndTime(text){
        this.setState({valueEndTime:text});
    },
    ChangeApplyReason1(text){
        this.setState({valueApplyReason1:text});
    },
    ChangeApplyReason2(text){
        this.setState({valueApplyReason2:text});
    },
    ChangeApplyReason3(text){
        this.setState({valueApplyReason3:text});
    },
    ChangeApplyReason4(text){
        this.setState({valueApplyReason4:text});
    },
    renderList() {
        var list = [];
        for (var i=0;i<50;i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }
        return list;
    },
    postForm(){
        name = valueName;
        number = Number(valueNumber);
        classname = valueClass;
        cardnumber = Number(valueID);
        starttime = valueStartTime;
        endtime = valueEndTime;
        reason = valueApplyReason;
        fetch("http://www.in-class.cn/api/apply/add?"+
        "name="+name+
        "&number="+number+
        "&classname="+classname+
        "&cardnumber="+cardnumber+
        "&starttime="+starttime+
        "&endtime="+endtime+
        "&reason="+reason)
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                alert("ok");
            }
        })
        .catch((error) => {
            console.warn(error);
            alert("error");
        })
    },
    render() {
        valueName = this.state.valueName;
        valueNumber = this.state.valueNumber;
        valueClass = this.state.valueClass;
        valueID = this.state.valueID;
        valueStartTime = this.state.valueStartTime;
        valueEndTime = this.state.valueEndTime;
        valueApplyReason1 = this.state.valueApplyReason1;
        valueApplyReason2 = this.state.valueApplyReason2;
        valueApplyReason3 = this.state.valueApplyReason3;
        valueApplyReason4 = this.state.valueApplyReason4;
        valueApplyReason = valueApplyReason1 + valueApplyReason2 + valueApplyReason3 + valueApplyReason4;
        var BContent = <Button onPress={this.closeModal5} style={[styles.btn, styles.btnModal]}>X</Button>;
        return (
            <View style={styles.wrapper}>
                <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
                    <ScrollView>
                        <View style={{width: window.width, paddingLeft: 10}}>
                          {this.renderList()}
                        </View>
                    </ScrollView>
                </Modal>
                
                <View style={applyCss.tableContainer}>
                    <View style={applyCss.formRow}>
                        <Text style={applyCss.formText}>{"姓名:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="姓名"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeName(text)}/>
                        <Text style={applyCss.formText}>{"学号:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="学号"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeNumber(text)}/>
                    </View>
                    <View style={applyCss.formRow}>
                        <Text style={applyCss.formText}>{"班级:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="班级"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeClass(text)}/>
                        
                        <Text style={applyCss.formText}>{"身份证:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="身份证"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeID(text)}/>
                    </View>
                    <View style={applyCss.formRow}>
                        <Text style={applyCss.formText}>{"开始时间:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="开始时间"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeStartTime(text)}/>

                        <Text style={applyCss.formText}>{"结束时间:"}</Text>
                        <TextInput
                        style={applyCss.textInput}
                        placeholder="结束时间"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeEndTime(text)}/>
                    </View>
                    <View style={applyCss.formRowCon}>
                        
                        <Text style={applyCss.formTextCon}>{"申请理由:"}</Text>
                        
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholder="申请理由"
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeApplyReason1(text)}/>
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeApplyReason2(text)}/>
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeApplyReason3(text)}/>
                        <TextInput
                        style={applyCss.textInputCon}
                        placeholderTextColor="#ccc"
                        multiline = {true}
                        onChangeText={ (text) => this.ChangeApplyReason4(text)}/>
                        
                    </View>
                    <Button onPress={this.openModal5}><Dropdown></Dropdown></Button>
                </View>        

                <Modal isOpen={this.state.isOpen} onClosed={this.closeModal5} style={styles.modal4} position={"center"} backdropContent={BContent}>
                    <View style={applyCss.headTextCon}>
                        <Text style={applyCss.infoHeadText}>{"申请信息"}</Text>
                    </View>
                    <View style={applyCss.infoTextCon}>
                        <View style={applyCss.infoRow}>
                            <Text style={applyCss.infoRowHead1}>{"姓名:"}</Text>
                            <Text style={applyCss.infoText1}>{valueName}</Text>
                            <Text style={applyCss.infoRowHead1}>{"学号:"}</Text>
                            <Text style={applyCss.infoText1}>{valueNumber}</Text>
                        </View>
                        <View style={applyCss.infoRow}>
                            <Text style={applyCss.infoRowHead}>{"班级:"}</Text>
                            <Text style={applyCss.infoText}>{valueClass}</Text>
                        </View>
                        <View style={applyCss.infoRow}>
                            <Text style={applyCss.infoRowHead}>{"身份证:"}</Text>
                            <Text style={applyCss.infoText}>{valueID}</Text>
                        </View>
                         <View style={applyCss.infoRow}>
                            <Text style={applyCss.infoRowHead1}>{"开始时间:"}</Text>
                            <Text style={applyCss.infoText1}>{valueStartTime}</Text>
                            <Text style={applyCss.infoRowHead1}>{"结束时间:"}</Text>
                            <Text style={applyCss.infoText1}>{valueEndTime}</Text>
                        </View>
                         <View style={applyCss.infoRow}>
                            <Text style={applyCss.infoRowHead}>{"申请理由:"}</Text>
                            <Text style={applyCss.infoText}>{valueApplyReason}</Text>
                        </View>
                        <View style={applyCss.infoRowNew}>
                            <TouchableOpacity
                            onPress={this.closeModal5}>
                                <View style={applyCss.cancel}>
                                    <Text style={applyCss.cancelText}>{'取消'}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={this.postForm}>
                                <View style={applyCss.sure}>
                                    <Text style={applyCss.sureText}>{'确认'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
});
AppRegistry.registerComponent('ModalBox', () => ModalBox);
module.exports = ModalBox;
