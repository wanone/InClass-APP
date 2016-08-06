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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-50,
        backgroundColor: "#0187d6",
        paddingBottom: 70,
    },
    containerConNew: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-50,
        backgroundColor: "#fff",
        paddingBottom: 100,
    },
    recordCon: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-120,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
    },
    placeCon: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    scrollCon: {
        width: Dimensions.get('window').width,
        height: 200,
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
        color: "#0187d6",
        textAlign: "center",
        textAlignVertical: "center",
    },
    remarkText: {
        fontSize: 18,
        color: "#0187d6",
        textAlign: "center",
        textAlignVertical: "center",
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
        position: "absolute",
        left: 0,
        top: 0,
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
        position: "relative",
    },
    containerLSNew: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#fff",
        position: "relative",
    },
    headIcon: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: "white",
        position: "relative",
    },
    headIconNew: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: "#0187d6",
        position: "relative",
    },
    funcCon: {
        flex: 1,
        width: Dimensions.get('window').width,
        marginTop: 20,
        backgroundColor: "#ddd",
    },
    headCon: {
        width: Dimensions.get('window').width,
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
    headTextNew: {
        width: Dimensions.get('window').width/2-25,
        height: 50,
        fontSize: 20,
        color: "white",
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
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 1,
        backgroundColor: "#eee",
    },
    rowText: {
        width: Dimensions.get('window').width,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlign: "center",
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
        backgroundColor: '#0187d6',
        borderRadius: 15,
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