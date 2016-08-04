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
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';

import styles  from   './commonCssNew';

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor1: true, 
            backgroundColor2: false, 
            backgroundColor3: false, 
            backgroundColor4: false, 
        };
    }
    containerStyleTabClear(){
        this.setState({ backgroundColor1: false });
        this.setState({ backgroundColor2: false });
        this.setState({ backgroundColor3: false });
        this.setState({ backgroundColor4: false });
    } 
    containerStyleTab(){
        return {
            padding: 10, 
            height: 70, 
            width: Dimensions.get('window').width/4, 
            justifyContent: "center",
            alignItems: "center",
        }
    }
    containerStyleTab1(){
        this.containerStyleTab();
        if (this.state.backgroundColor1){
            return {
                backgroundColor: "#0168d6",
            }
        }
    }
    containerStyleTab2(){
        this.containerStyleTab();
        if (this.state.backgroundColor2){
            return {
                backgroundColor: "#0168d6",
            }
        }
    }
    containerStyleTab3(){
        this.containerStyleTab();
        if (this.state.backgroundColor3){
            return {
                backgroundColor: "#0168d6",
            }
        }
    }
    containerStyleTab4(){
        this.containerStyleTab();
        if (this.state.backgroundColor4){
            return {
                backgroundColor: "#0168d6",
            }
        }
    }
    tabClass(){
        this.props.onPage1Show();
        this.containerStyleTabClear();
        this.setState({ backgroundColor1: true });
    }
    tabApply(){
        this.props.onPage2Show();
        this.containerStyleTabClear();
        this.setState({ backgroundColor2: true });
    }
    tabControl(){
        this.props.onPage3Show();
        this.containerStyleTabClear();
        this.setState({ backgroundColor3: true });
    }
    tabMe(){
        this.props.onPage4Show();
        this.containerStyleTabClear();
        this.setState({ backgroundColor4: true });
    }
    render() {
        return (
            <View style={styles.tabBar}>
                <TouchableOpacity style={this.containerStyleTab1()}
                onPress={()=>this.tabClass()}>
                    <View style={styles.tabContainer}>
                        <Image source={require('../common/commonImg/class.png')} style={styles.tabImg}/>
                    </View>
                    <View style={styles.tabTextContainer}>
                        <Text style={styles.tabText}>{'教室'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={this.containerStyleTab2()}
                onPress={()=>this.tabApply()}>
                    <View style={styles.tabContainer}>
                        <Image source={require('../common/commonImg/apply.png')} style={styles.tabImg}/>
                    </View>
                    <View style={styles.tabTextContainer}>
                         <Text style={styles.tabText}>{'申请'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={this.containerStyleTab3()}
                onPress={()=>this.tabControl()}>
                   <View style={styles.tabContainer}>
                        <Image source={require('../common/commonImg/control.png')} style={styles.tabImg}/>
                    </View>
                    <View style={styles.tabTextContainer}>
                         <Text style={styles.tabText}>{'控制'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={this.containerStyleTab4()}
                onPress={()=>this.tabMe()}>
                   <View style={styles.tabContainer}>
                        <Image source={require('../common/commonImg/me.png')} style={styles.tabImg}/>
                    </View>
                    <View style={styles.tabTextContainer}>
                         <Text style={styles.tabText}>{'我'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};
    