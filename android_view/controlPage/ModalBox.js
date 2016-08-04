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
    open(){
        this.openModal5();
    },
    close(){
        this.closeModal5();
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


                <Modal isOpen={this.state.isOpen} onClosed={this.close} style={styles.modal4} position={"center"}>
                </Modal>

                <TableCon num={this.props.num} place={this.props.place}
            status={this.props.status} time={this.props.time}
            operate={this.props.operate} onPress={this.open}
            style={this.props.style}/>
            </View>
        );
    }
});

var styles  = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "white",
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
        height: 325,
        paddingTop: 5,
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center",
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
    }
});


AppRegistry.registerComponent('ModalBox', () => ModalBox);
module.exports = ModalBox;
