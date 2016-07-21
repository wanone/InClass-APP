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
    show: {

    }
});
module.exports = styles;