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
import  Table      from  './Table';

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
        height: 400
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
        fontSize: 22
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
            class1: true,
            class2: false,
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
    render() {
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
                <Button onPress={this.openModal5}><Dropdown></Dropdown></Button>
                 
                <View style={styles.tableContainer}>
                    <View style={styles.classContainer, styles.hide} ref="class1">
                        <Table seNum="序号"   num="编号"  place="位置"  ratio="占用率" style={styles.containerTableCellHead}></Table>
                        <Table seNum="110101" num="11029" place="X6405" ratio="70%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="110102" num="11021" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                        <Table seNum="110103" num="11022" place="X6405" ratio="80%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="110104" num="11023" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                        <Table seNum="110105" num="11024" place="X6405" ratio="80%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="110106" num="11025" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                        <Table seNum="110107" num="11026" place="X6405" ratio="80%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="110108" num="11027" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                    </View>

                    <View style={styles.classContainer, styles.show} ref="class2">
                        <Table seNum="序号"   num="编号"  place="位置"  ratio="占用率" style={styles.containerTableCellHead}></Table>
                        <Table seNum="210101" num="11029" place="X6405" ratio="70%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="210102" num="11021" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                        <Table seNum="210103" num="11022" place="X6405" ratio="80%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="210104" num="11023" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                        <Table seNum="210105" num="11024" place="X6405" ratio="80%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="210106" num="11025" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                        <Table seNum="210107" num="11026" place="X6405" ratio="80%"　  style={styles.containerTableCellGray}></Table>
                        <Table seNum="210108" num="11027" place="X6405" ratio="80%"　  style={styles.containerTableCellBlue}></Table>
                    </View>

                </View>
                <Modal isOpen={this.state.isOpen} onClosed={this.closeModal5} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
                    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第一教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第二教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第三教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第四教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第五教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第六教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第七教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第八教学楼"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={this.closeModal5}>
                       <Text style={styles.styleLog}>{"第九教学楼"}</Text>
                    </TouchableOpacity>

                </Modal>
            </View>
        );
    }
});
AppRegistry.registerComponent('ModalBox', () => ModalBox);
module.exports = ModalBox;
