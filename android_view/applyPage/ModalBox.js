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
        height: 300,
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
    },
    show:{
        left: 0,
    },
    hide: {
        left: -9999,
    },
    containerTableCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/4,
        height: 40,
        padding: 5,
        color: "white",
        fontSize: 18,
        backgroundColor: "#aaa",
        textAlign: "center",
        textAlignVertical: "center"
    },
    containerTableCellGray: {
        flexDirection: "row",
        width: Dimensions.get('window').width/4,
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
        width: Dimensions.get('window').width/4,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
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
            valueApplyTime: '申请时间',
            valueApplyReason1: '申请理由',
            valueApplyReason2: '',
            valueApplyReason3: '',
            valueApplyReason4: '',
            valueProveThing: '证明材料',
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
    ChangeApplyTime(text){
        this.setState({valueApplyTime:text});
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
    ChangeProveThing(text){
        this.setState({valueProveThing:text});
    },
    renderList() {
        var list = [];
        for (var i=0;i<50;i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }
        return list;
    },
    render() {
        valueName = this.state.valueName;
        valueNumber = this.state.valueNumber;
        valueClass = this.state.valueClass;
        valueID = this.state.valueID;
        valueApplyTime = this.state.valueApplyTime;
        valueApplyReason1 = this.state.valueApplyReason1;
        valueApplyReason2 = this.state.valueApplyReason2;
        valueApplyReason3 = this.state.valueApplyReason3;
        valueApplyReason4 = this.state.valueApplyReason4;
        valueApplyReason = valueApplyReason1 + valueApplyReason2 + valueApplyReason3 + valueApplyReason4;
        valueProveThing = this.state.valueProveThing;
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
                        <Text style={applyCss.formTextTime}>{"申请时间:"}</Text>
                        <TextInput
                        style={applyCss.textInputTime}
                        placeholder="申请时间"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeApplyTime(text)}/>
                        
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
                    <View style={applyCss.formRow}>
                        <Text style={applyCss.formTextTime}>{"证明材料:"}</Text>
                        <TextInput
                        style={applyCss.textInputTime}
                        placeholder="证明材料"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.ChangeProveThing(text)}/>
                    </View>
                    <Button onPress={this.openModal5}><Dropdown></Dropdown></Button>
                </View>        

                <Modal isOpen={this.state.isOpen} onClosed={this.closeModal5} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
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
                            <Text style={applyCss.infoRowHead}>{"申请时间:"}</Text>
                            <Text style={applyCss.infoText}>{valueApplyTime}</Text>
                        </View>
                         <View style={applyCss.infoRow}>
                            <Text style={applyCss.infoRowHead}>{"申请理由:"}</Text>
                            <Text style={applyCss.infoText}>{valueApplyReason}</Text>
                        </View>
                        <View style={applyCss.infoRow}>
                            <Text style={applyCss.infoRowHead}>{"证明材料:"}</Text>
                            <Text style={applyCss.infoText}>{valueProveThing}</Text>
                        </View>
                        <View style={applyCss.infoRowNew}>
                            <TouchableOpacity
                            onPress={this.closeModal5}>
                                <View style={applyCss.cancel}>
                                    <Text style={applyCss.cancelText}>{'取消'}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={this.closeModal5}>
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
