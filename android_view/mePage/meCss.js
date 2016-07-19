import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';

let meCss = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative" 
    },
    containerCon: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width-50,
    },
    portrait: {
        width: Dimensions.get('window').width/3,
        height: Dimensions.get('window').width/3,
        borderRadius: 300
    },
    portraitBg: {
        width: Dimensions.get('window').width,
        height: 160,
        backgroundColor: '#0187d6',
        justifyContent: "center",
        alignItems: "center"
    },
    nameCon: {
        width: Dimensions.get('window').width,
        height: 40,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    nameText: {
        fontSize: 20,
        color: "#0187d6"
    },
    containerStyleTab:{
        flexDirection: "row",
        padding: 10, 
        paddingLeft: 20, 
        height: 45, 
        marginBottom: 5,
        width: Dimensions.get('window').width,
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: 'hidden', 
        backgroundColor: 'white'
    },
    styleLog:{
      　fontSize: 18, 
      　color: '#0079c1'
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
    containerLS: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#0187d6",
        position: "relative",
    },
    funcCon: {
        flex: 1,
        width: Dimensions.get('window').width,
        marginTop: 20,
        backgroundColor: "#ddd",
    },
    headIcon: {
        width: Dimensions.get('window').width,
        height: 50,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },
    headCon: {
        width: Dimensions.get('window').width-50,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    containerTableCon: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        height: 40,
        justifyContent: "space-between",
        alignItems: "center"
    },
    headText: {
        width: Dimensions.get('window').width/2-25,
        height: 50,
        fontSize: 20,
        color: "#0187d6",
        textAlign: "center",
        textAlignVertical: "center",
    },
    containerTableConCellHead: {
        flexDirection: "row",
        width: Dimensions.get('window').width/5,
        height: 40,
        padding: 5,
        color: "white",
        fontSize: 16,
        backgroundColor: "#aaa",
        textAlign: "center",
        textAlignVertical: "center"
    },
    containerTableConCellGray: {
        flexDirection: "row",
        width: Dimensions.get('window').width/5,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#eee",
    },
    containerTableConCellBlue: {
        flexDirection: "row",
        width: Dimensions.get('window').width/5,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
    },
    rowInform: {
        width: Dimensions.get('window').width,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 1,
        paddingLeft: 30,
        backgroundColor: "#ddd",
    },
    rowText: {
        width: Dimensions.get('window').width,
        height: 50,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlignVertical: "center",
    },
    textInput: {
        width: Dimensions.get('window').width-120,
        height: 50,
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
    },
    form: {
        width: Dimensions.get('window').width-20,
        height: 170,
        marginTop: 100,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    formRow: {
        width: Dimensions.get('window').width-20,
        height: 50,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
      　alignItems: "center",
    },
    formText: {
        width: 80,
        height: 40,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        backgroundColor: '#0187d6'
    },
    formSure: {
        width: Dimensions.get('window').width-20,
        height: 45,
        marginTop: 30,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    logBtn: {
        width: Dimensions.get('window').width-20,
        height: 45,
        padding: 10,  
        justifyContent: "center",
        alignItems: "center",
    },
    styleLog:{
      　fontSize: 20, 
      　color: '#0187d6'
    },
});
module.exports = meCss;