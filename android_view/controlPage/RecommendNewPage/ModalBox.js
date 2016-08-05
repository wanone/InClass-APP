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

import   Button             from   'react-native-button';
import   Modal              from   'react-native-modalbox';
import   Slider             from   'react-native-slider';
import   applyCss           from   './applyCss';
import   AllCss             from   './AllCss';
import   Table              from   './Table';
import   TableCssCon        from   "./TableCssCon";
import   TableCon           from   "./TableCon";

var window  = Dimensions.get('window');

var ModalBox = React.createClass({
    getInitialState(){
        return {
            isOpen: false,
      　    isDisabled: false,
      　    swipeToClose: true,
      　    sliderValue: 0.3,
            statusS: "开启",
            modePeople: "开启",
            modePromote: "开启"
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
    renderList() {
        var list = [];
        for (var i=0;i<50;i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }
        return list;
    },
    statusFunc(text){
        if ( text == "开启"){
            this.state.statusS="关闭";
        }else{
            this.state.statusS="开启";
        }
    },
    modePeopleFunc(text){
         if ( text == "开启"){
            this.state.modePeople="关闭";
        }else{
            this.state.modePeople="开启";
        }
    },
    modePromoteFunc(text){
         if ( text == "开启"){
            this.state.modePromote="关闭";
        }else{
            this.state.modePromote="开启";
        }
    },
    open(){
        this.openModal5();
    },
    open1(){
        this.statusFunc(this.props.status[0]);
        this.modePeopleFunc(modePeoples[0]);
        this.modePromoteFunc(modePromotes[0]);
        this.openModal5();
    },
    open2(){
        this.statusFunc(this.props.status[1]);
        this.modePeopleFunc(modePeoples[1]);
        this.modePromoteFunc(modePromotes[1]);
        this.openModal5();
    },
    open3(){
        this.statusFunc(this.props.status[2]);
        this.modePeopleFunc(modePeoples[2]);
        this.modePromoteFunc(modePromotes[2]);
        this.openModal5();
    },
    open4(){
        this.statusFunc(this.props.status[3]);
        this.modePeopleFunc(modePeoples[3]);
        this.modePromoteFunc(modePromotes[3]);
        this.openModal5();
    },
    close(){
        this.closeModal5();
    },
    func1(){
        alert(this.state.statusS);
        if ( this.state.statusS == "开启"){
            this.state.statusS="关闭";
            alert(this.state.statusS);
        }else{
            this.state.statusS="开启";
        }
    },
    func2(){
        alert("ok2");
    },
    func3(){
        alert("ok3");
    },
    render() {
        modePeoples = new Array();
        modePromotes = new Array();
        modePeoples = ["关闭", "开启", "关闭", "开启"];
        modePromotes = ["开启", "关闭", "开启", "关闭"];
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

                <TableCon num={this.props.num[0]} place={this.props.place[0]}
                status={this.props.status[0]} time={this.props.time[0]}
                operate={this.props.operate[0]} onPress={this.open1}
                style={this.props.style}/>

                <TableCon num={this.props.num[1]} place={this.props.place[1]}
                status={this.props.status[1]} time={this.props.time[1]}
                operate={this.props.operate[1]} onPress={this.open2}
                style={this.props.style}/>

                <TableCon num={this.props.num[2]} place={this.props.place[2]}
                status={this.props.status[2]} time={this.props.time[2]}
                operate={this.props.operate[2]} onPress={this.open3}
                style={this.props.style}/>

                <TableCon num={this.props.num[3]} place={this.props.place[3]}
                status={this.props.status[3]} time={this.props.time[3]}
                operate={this.props.operate[3]} onPress={this.open4}
                style={this.props.style}/>

                <Modal isOpen={this.state.isOpen} onClosed={this.close} style={styles.modal4} position={"center"}>
                    <View style={styles.headTextCon}>
                        <Text style={styles.infoHeadText}>{"当前状态"}</Text>
                    </View>
                    <View style={styles.infoTextCon}>
                        <View style={styles.modeCon}>
                            <View style={styles.modeConT}>
                                <Text style={styles.infoRowHead}>{"状态更换:"}</Text>
                                <View style={styles.infoText}>
                                    <TouchableOpacity
                                    onPress={this.func1} style={styles.infoTextBtn}>
                                        <Text style={styles.infoTextBtnText}>{this.state.statusS}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.modeConT}>
                                <Text style={styles.infoRowHead}>{"人控模式:"}</Text>
                                <View style={styles.infoText}>
                                    <TouchableOpacity
                                    onPress={this.func2} style={styles.infoTextBtn}>
                                        <Text style={styles.infoTextBtnText}>{this.state.modePeople}</Text>
                                    </TouchableOpacity>    
                                </View>                        
                            </View>
                            <View style={styles.modeConT}>
                                <Text style={styles.infoRowHead}>{"远程控制:"}</Text>
                                <View style={styles.infoText}>
                                    <TouchableOpacity
                                    onPress={this.func3} style={styles.infoTextBtn}>
                                        <Text style={styles.infoTextBtnText}>{this.state.modePromote}</Text>
                                    </TouchableOpacity>       
                                </View>                 
                            </View>
                        </View>
                        <View style={styles.infoRowNew}>
                            <TouchableOpacity
                            onPress={this.closeModal5}>
                                <View style={styles.cancel}>
                                    <Text style={styles.cancelText}>{'取消'}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={this.postForm}>
                                <View style={styles.sure}>
                                    <Text style={styles.sureText}>{'确认'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


            </View>
        );
    }
});

var styles  = StyleSheet.create({
    wrapper: {
        position: "absolute",
        zIndex: 99,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-260,
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
        position: "absolute",
        zIndex: 101,
        width: Dimensions.get('window').width*0.9,
        height: 240,
        borderRadius: 10,
    },
    modeCon: {
        width: Dimensions.get('window').width*0.9,
        height: 150,
    },
    modeConT: {
        width: Dimensions.get('window').width*0.9,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    infoRowNew: {
        width: Dimensions.get('window').width*0.9,
        height: 40,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    cancel: {
        width: Dimensions.get('window').width*0.45,
        height: 40,
        backgroundColor: "#ddd",
        borderBottomLeftRadius: 10,
        justifyContent: "center",
        alignItems: "center", 
    },
    sure: {
        width: Dimensions.get('window').width*0.45,
        height: 40,
        backgroundColor: "#0187d6",
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center", 
    },
    cancelText: {
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#0187d6",
    },
    infoTextBtnText: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
    },
    sureText: {
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
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
    headTextCon: {
        width: Dimensions.get('window').width*0.9,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0187d6',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10, 
    },
    infoHeadText: {
        fontSize: 20,
        color: "white"
    },
    infoTextCon: {
        width: Dimensions.get('window').width*0.9,
        height: 210
    },
    infoText: {
        width: Dimensions.get('window').width*0.45,
        height: 50,
        fontSize: 18,
        color: "#0187d6",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    infoTextBtn: {
        width: Dimensions.get('window').width*0.2,
        height: 35,
        fontSize: 18,
        color: "#0187d6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "red",
    },
    infoRow: {
        width: Dimensions.get('window').width*0.9,
        height: 40,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
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
    classCon: {
        position: "relative",
        zIndex: -1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-214,
        backgroundColor: "white",
    },
    BtnCon: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: "#0187d6",
        justifyContent: "center",
        alignItems: "center",
    },
    infoRow: {
        width: Dimensions.get('window').width*0.9,
        height: 40,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    infoRowHead: {
        width: Dimensions.get('window').width*0.45,
        height: 50,
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#0187d6",
        backgroundColor: "white",
    }
});


AppRegistry.registerComponent('ModalBox', () => ModalBox);
module.exports = ModalBox;
