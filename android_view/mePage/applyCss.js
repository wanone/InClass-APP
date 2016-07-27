import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions
} from 'react-native';

let applyCss = StyleSheet.create({
    headText: {
		width: Dimensions.get('window').width,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#0187d6",
	},
	tableContainer: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height-168,
        position: "relative"
	},
	tabText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
		textAlignVertical: "center"
	},
	textInput: {
		width: Dimensions.get('window').width/2-50,
		height: 50,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
    },
    formRow: {
    	width: Dimensions.get('window').width,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
      　alignItems: "center",
    },
    formText: {
    	width: 50,
		height: 40,
		fontSize: 16,
		textAlign: "center",
		textAlignVertical: "center",
		color: "white",
		backgroundColor: '#0187d6'
    },
    formTextTime: {
    	width: 100,
		height: 40,
		fontSize: 16,
		textAlign: "center",
		textAlignVertical: "center",
		color: "white",
		backgroundColor: '#0187d6'
    },
    textInputTime: {
		width: Dimensions.get('window').width-100,
		height: 50,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
    },
    formRowCon: {
    	width: Dimensions.get('window').width,
		height: 200,
		justifyContent: "center",
      　alignItems: "center",
    },
    formTextCon: {
        position: "absolute",
        left: 0,
        top: 5,
    	width: 50,
		height: 190,
		fontSize: 18,
		color: "white",
		backgroundColor: '#0187d6'
    },
    textInputCon: {
		width: Dimensions.get('window').width-50,
		marginLeft: 50,
		height: 50,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
    },
    sureIcon: {
        width: Dimensions.get('window').width/2,
        position: "absolute",
        bottom: 5,
        justifyContent: "center",
      　alignItems: "center",
        left: Dimensions.get('window').width/2,
        marginLeft: -Dimensions.get('window').width/4,
        backgroundColor: "#0187d6",
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
        backgroundColor: '#0187d6'
    },
    styleLog:{
      　fontSize: 20, 
      　color: 'white'
    },
    headTextCon: {
        width: Dimensions.get('window').width*0.9,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0187d6',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10, 
    },
    infoHeadText: {
        fontSize: 20,
        color: "white"
    },
    infoTextCon: {
        width: Dimensions.get('window').width*0.9,
        height: 250
    },
    infoText: {
        fontSize: 18,
        color: "#0187d6"
    },
    infoRow: {
        width: Dimensions.get('window').width*0.9,
        height: 35,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    infoRowHead: {
        width: 100,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#0187d6",
    },
    infoText: {
        width: Dimensions.get("window").width*0.9-100,
        height: 35,
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 2,
        borderColor: "#ccc",
    },
    infoRowHead1: {
        width: 50,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#0187d6",
    },
    infoText1: {
        width: Dimensions.get("window").width*0.45-50,
        height: 35,
        textAlign: "center",
        textAlignVertical: "center",
    },
    infoRowNew: {
        width: Dimensions.get('window').width*0.9,
        height: 40,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    cancel: {
        width: Dimensions.get('window').width*0.45,
        height: 40,
        backgroundColor: "#ddd",
        borderBottomLeftRadius: 10,
        justifyContent: "center",
        alignItems: "center", 
    },
    sure: {
        width: Dimensions.get('window').width*0.45,
        height: 40,
        backgroundColor: "#0187d6",
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center", 
    },
    cancelText: {
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#0187d6",
    },
    sureText: {
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
    }
});
module.exports = applyCss;
/*<View style={applyCss.sureIcon}>
                            <TouchableOpacity style={applyCss.logBtn} onPress={() => {
                                alert(
                                    '姓名: '+valueName+" , "+
                                    '学号: '+valueNumber+" , "+
                                    '班级: '+valueClass+" , "+
                                    '身份证: '+valueID+" , "+
                                    '申请时间: '+valueApplyTime+" , "+
                                    '申请理由: '+valueApplyReason
                                );
                            }}>
                                <Text style={applyCss.styleLog}>{'提 交'}</Text>
                            </TouchableOpacity>
                        </View>*/