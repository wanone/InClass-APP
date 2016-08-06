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
import   Building           from   './Building';
import   BuildingS          from   './BuildingS';
import   Dropdown           from   './Dropdown';
import   YesBuildingOne     from   './YesBuildingOne';
import   YesBuildingTwo     from   './YesBuildingTwo';
import   YesBuildingThree   from   './YesBuildingThree';
import   YesBuildingFour    from   './YesBuildingFour';
import   YesBuildingFive    from   './YesBuildingFive';
import   YesBuildingSix     from   './YesBuildingSix';
import   YesBuildingSeven   from   './YesBuildingSeven';
import   YesBuildingEight   from   './YesBuildingEight';
import   YesBuildingNine    from   './YesBuildingNine';

var window  = Dimensions.get('window');

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
    }
});

var ModalBox = React.createClass({
    getInitialState(){
        return {
            isOpen: false,
      　    isDisabled: false,
      　    swipeToClose: true,
      　    sliderValue: 0.3,
            buildingText: "第一教学楼",
            Building1 : false,
            Building2 : false,
            Building3 : false,
            Building4 : false,
            Building5 : false,
            Building6 : false,
            Building7 : false,
            Building8 : false,
            Building9 : false,
            YesBuildingOne : true,
            YesBuildingTwo : false,
            YesBuildingThree : false,
            YesBuildingFour : false,
            YesBuildingFive : false,
            YesBuildingSix : false,
            YesBuildingSeven : false,
            YesBuildingEight : false,
            YesBuildingNine : false,
            statusModal: 1,
            statusBuilding: false,
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
    clearCon() {
        this.setState({YesBuildingOne : false});
        this.setState({YesBuildingTwo : false});
        this.setState({YesBuildingThree : false});
        this.setState({YesBuildingFour : false});
        this.setState({YesBuildingFive : false});
        this.setState({YesBuildingSix : false});
        this.setState({YesBuildingSeven : false});
        this.setState({YesBuildingEight : false});
        this.setState({YesBuildingNine : false});
    },
    close1(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingOne : true});
        this.setState({buildingText : "第一教学楼"});
    },
    close2(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingTwo : true});
        this.setState({buildingText : "第二教学楼"});
    },
    close3(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingThree : true});
        this.setState({buildingText : "第三教学楼"});
    },
    close4(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingFour : true});
        this.setState({buildingText : "第四教学楼"});
    },
    close5(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingFive : true});
        this.setState({buildingText : "第五教学楼"});
    },
    close6(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingSix : true});
        this.setState({buildingText : "第六教学楼"});
    },
    close7(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingSeven : true});
        this.setState({buildingText : "第七教学楼"});
    },
    close8(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingEight : true});
        this.setState({buildingText : "第八教学楼"});
    },
    close9(){
        this.clearCon();
        this.closeModal5();
        this.setState({YesBuildingNine : true});
        this.setState({buildingText : "第九教学楼"});
    },
    open(){
        if (this.state.statusModal ==1 ){
            this.openModal5();
            this.setState({statusModal : 1});
        }
    },
    componentWillMount() {
        this.getBuildings();
    },
    componentWillUnmount() {
        this.getBuildings();
    },
    getBuildings(){
        var datas = new Array();
        fetch("http://123.207.6.76/inclass/api/classroom/getbuildings")
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body.buildings;
                if (array.length == 0){
                    this.setState({statusBuilding: true});
                };
                for(var i=0; i<array.length; i++ ){
                    switch (Number(array[i].building)){
                        case 1:
                            this.setState({Building1: true});
                            break;
                        case 2:
                            this.setState({Building2: true});
                            break;
                        case 3:
                            this.setState({Building3: true});
                            break;
                        case 4:
                            this.setState({Building4: true});
                            break;
                        case 5:
                            this.setState({Building5: true});
                            break;
                        case 6:
                            this.setState({Building6: true});
                            break;
                        case 7:
                            this.setState({Building7: true});
                            break;
                        case 8:
                            this.setState({Building8: true});
                            break;
                        case 9:
                            this.setState({Building9: true});
                            break;
                        default:
                            alert("no");
                    }
                }
            }else{
                alert("request fail");
            }
        })
        .catch((error) => {
            console.warn(error);
        })
    },
    render() {
        return (
            <View style={styles.wrapper}>
                <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
                    <ScrollView>
                        <View style={{width: window.width, paddingLeft: 10}}>
                          {this.renderList()}
                        </View>
                    </ScrollView>
                </Modal>

                <Dropdown open={this.open} buildingText={this.state.buildingText}></Dropdown>

                <Modal isOpen={this.state.isOpen} onClosed={this.close} style={styles.modal4} position={"center"}>
                {this.state.statusBuilding ? <BuildingS  closeModal={this.closeModal5}/> : false}
                {this.state.Building1 ? <Building  num={1}  closeModal={this.close1.bind(this)}/> : false}
                {this.state.Building2 ? <Building  num={2}  closeModal={this.close2.bind(this)}/> : false}
                {this.state.Building3 ? <Building  num={3}  closeModal={this.close3.bind(this)}/> : false}
                {this.state.Building4 ? <Building  num={4}  closeModal={this.close4.bind(this)}/> : false}
                {this.state.Building5 ? <Building  num={5}  closeModal={this.close5.bind(this)}/> : false}
                {this.state.Building6 ? <Building  num={6}  closeModal={this.close6.bind(this)}/> : false}
                {this.state.Building7 ? <Building  num={7}  closeModal={this.close7.bind(this)}/> : false}
                {this.state.Building8 ? <Building  num={8}  closeModal={this.close8.bind(this)}/> : false}
                {this.state.Building9 ? <Building  num={9}  closeModal={this.close9.bind(this)}/> : false}
                </Modal>

                <View style={styles.classCon}>
                {this.state.YesBuildingOne ? <YesBuildingOne/> : false}
                {this.state.YesBuildingTwo ? <YesBuildingTwo/> : false}
                {this.state.YesBuildingThree  ? <YesBuildingThree/> : false}
                {this.state.YesBuildingFour ? <YesBuildingFour/> : false}
                {this.state.YesBuildingFive ? <YesBuildingFive/> : false}
                {this.state.YesBuildingSix ? <YesBuildingSix/> : false}
                {this.state.YesBuildingSeven ? <YesBuildingSeven/> : false}
                {this.state.YesBuildingEight ? <YesBuildingEight/> : false}
                {this.state.YesBuildingNine ? <YesBuildingNine/> : false}
                </View>

            </View>
        );
    }
});

AppRegistry.registerComponent('ModalBox', () => ModalBox);
module.exports = ModalBox;
