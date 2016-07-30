import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';
let AllCss = StyleSheet.create({
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
    backImg: {
        width: 25,
        height: 25
    },
    backIcon: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollCon: {
    	width: Dimensions.get('window').width,
    	height: 200,
    },
    tableContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 30
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
    },
    containerTableCellHeadS: {
        flexDirection: "row",
        width: Dimensions.get('window').width/3,
        height: 40,
        padding: 5,
        color: "white",
        fontSize: 18,
        backgroundColor: "#aaa",
        textAlign: "center",
        textAlignVertical: "center"
    },
    containerTableCellGrayS: {
        flexDirection: "row",
        width: Dimensions.get('window').width/3,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#eee",
    },
    containerTableCellBlueS: {
        flexDirection: "row",
        width: Dimensions.get('window').width/3,
        height: 40,
        padding: 5,
        color: "#0187d6",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#ddd",
    }
});
module.exports = AllCss;
/*                */