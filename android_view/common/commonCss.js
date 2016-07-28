import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';
let styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative" 
    },
    containerCon: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-88,
        position: "relative",
        backgroundColor: "#eee" 
    },
    containerLS: {
        flex: 1,
        position: "relative",
        backgroundColor: "#0187d6"
    },
    heading: {
      　height: 44,
      　alignItems: 'center',
      　justifyContent: 'center', // 内容居中显示
      　backgroundColor: '#ff1046',
      　marginBottom: 10
    },　
    headText: {
        color: '#ffffff',
        fontSize: 22
    },
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center', // 内容居中显示
        backgroundColor: '#eeeeee',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18
    },
    bgColor:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    logBox:{
        width: 200,
        position: "absolute",
        bottom: 140,
        left: Dimensions.get('window').width/2,
        marginLeft: -100,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerStyleLog:{
        padding:10, 
        height:45, 
        width: 80, 
        justifyContent: "center",
        alignItems: "center",
        overflow:'hidden', 
        borderRadius:10, 
        backgroundColor: 'white'
    },
    containerStyleTab:{
        padding: 10, 
        height: 70, 
        width: Dimensions.get('window').width/4, 
        justifyContent: "center",
        alignItems: "center",
        overflow:'hidden'
    },
    styleLog:{
      　fontSize: 20, 
      　color: '#0079c1'
    },
    containerStyleSign:{
      　padding:10, 
      　height:45, 
      　justifyContent: "center",
      　alignItems: "center",
      　width: 80, 
      　overflow:'hidden', 
      　borderRadius:10, 
      　backgroundColor: '#0187d6'
    },
    styleSign:{
      　fontSize: 20, 
      　color: 'white'
    },
    backIcon: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    backImg: {
        width: 25,
        height: 25
    },
    logPanel: {
        width: 250,
        position: "absolute",
        bottom: 250,
        left: Dimensions.get('window').width/2,
        marginLeft: -125,
        backgroundColor: "white",
        borderRadius:10
    },
    textinput: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    sureIcon: {
        width: 250,
        position: "absolute",
        bottom: 150,
        justifyContent: "center",
      　alignItems: "center",
        left: Dimensions.get('window').width/2,
        marginLeft: -125,
        backgroundColor: "white",
        borderRadius:10
    },
    logBtn: {
        padding: 10, 
        height: 45, 
        width: 250, 
        justifyContent: "center",
        alignItems: "center",
        overflow:'hidden', 
        borderRadius:10, 
        backgroundColor: 'white'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    tabBar: {
        width: Dimensions.get('window').width,
        height: 70,
        backgroundColor:'#0187d6',
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row"
    },
    tabImg: {
        width: 35,
        height: 40,
        resizeMode: "contain"
    },
    tabContainer: {
        width: Dimensions.get('window').width/4,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8  
    },
    tabTextContainer: {
        width: Dimensions.get('window').width/4,
        height: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    tabText: {
        fontSize: 16,
        color: "white"
    },
    containerTableCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/7,
        height: 30,
        padding: 5,
        color: "white",
        fontSize: 16,
        backgroundColor: "#aaa",
        textAlign: "center",
        textAlignVertical: "center"
    },
    containerTableCellGray: {
        flexDirection: "row",
        width: Dimensions.get('window').width/7,
        height: 30,
        padding: 5,
        color: "#0187d6",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#eee",
    },
    containerTableCellBlue: {
        flexDirection: "row",
        width: Dimensions.get('window').width/7,
        height: 30,
        padding: 5,
        color: "#0187d6",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
    },
    textS: {
        fontSize: 20,
    },
    classTab: {
        backgroundColor: "#0168d6",
    },
    applyTab: {
        backgroundColor: "#0168d6",
    },
    controlTab: {
        backgroundColor: "#0168d6",
    },
    meTab: {
        backgroundColor: "#0168d6",
    },
});
module.exports = styles;
/*const React = require('react');
const ReactNative = require('react-native');
const {
  StyleSheet,
  Text,
  View,
  Animated,
} = ReactNative;
const Button = require('./Button');

const ClassTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    underlineColor: React.PropTypes.string,
    underlineHeight: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: '#0187d6',
      inactiveTextColor: '#aaa',
      underlineColor: '#0187d6',
      backgroundColor: 'white',
      underlineHeight: 5,
    };
  },

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const fontSize = isTabActive ? 16 : 14;
    return <Button
      style={{flex: 1}}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => this.props.goToPage(page)}
    >
      <View style={[styles.tab, this.props.tabStyle]}>
        <Text style={[{color: textColor, fontWeight, fontSize}, textStyle, ]}>
          {name}
        </Text>
      </View>
    </Button>;
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: this.props.underlineHeight,
      backgroundColor: this.props.underlineColor,
      bottom: 0,
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });

    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, { left, }, ]} />
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },
});

module.exports = ClassTabBar;
*/