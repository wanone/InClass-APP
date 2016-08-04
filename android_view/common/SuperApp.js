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

import   TabBar              from    './TabBarNew';
import   ClassPage           from    '../classPage/ClassPage'; 
import   ControlPage         from    '../controlPage/ControlPage'; 
import   RecommendNewPage    from    '../controlPage/RecommendNewPage/RecommendNewPage';   
import   ApplyPage           from    '../applyPage/ApplyPage'; 
import   MePage              from    '../mePage/MePage'; 

export default class SuperApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Page1: true,
            Page2: false,
            Page3: false,
            Page4: false
        };
    }
    componentWillMount() {
        console.disableYellowBox = true;
    }
    componentWillUnmount() {
        console.disableYellowBox = true;
    }
    onPageClear(e){
        this.setState({ Page1: false });
        this.setState({ Page2: false });
        this.setState({ Page3: false });
        this.setState({ Page4: false });
    }
    onPage1Show(e){
        this.onPageClear(e);
        this.setState({ Page1: true });    
    }
    onPage2Show(e){
        this.onPageClear(e);
        this.setState({ Page2: true });
    }
    onPage3Show(e){
        this.onPageClear(e);
        this.setState({ Page3: true });    
    }
    onPage4Show(e){
        this.onPageClear(e);
        this.setState({ Page4: true });
    }
    render() {
        return (
            <View style={styles.contrainer}>
                <View style={styles.contrainerApp}>
                {
                    this.state.Page1 == true ? <ClassPage/> : false
                }
                {
                    this.state.Page2 == true ? <ApplyPage/> : false
                }
                {
                    this.state.Page3 == true ? <RecommendNewPage/> : false
                }
                {
                    this.state.Page4 == true ? <MePage navigator={this.props.navigator}/> : false
                }
                </View>
                <TabBar 
                onPage1Show={this.onPage1Show.bind(this)}
                onPage2Show={this.onPage2Show.bind(this)}
                onPage3Show={this.onPage3Show.bind(this)}
                onPage4Show={this.onPage4Show.bind(this)}></TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    contrainerApp: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-94,
    }
});