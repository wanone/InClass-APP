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

export default class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerHead}>
                    <Text style={styles.containerHeadText}>{this.props.num}</Text>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.RowHeadText}>{"申请人:"}</Text>
                    <View style={styles.RowConText}>
                        <Text style={styles.RowConTextC}>{this.prop.name}</Text>
                    </View>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.RowHeadText}>{"申请教室:"}</Text>
                    <View style={styles.RowConText}>
                        <Text style={styles.RowConTextC}>{this.prop.classS}</Text>
                    </View>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.RowHeadText}>{"审核状态:"}</Text>
                    <View style={styles.RowConText}>
                        <Text style={styles.RowConTextC}>{this.prop.status}</Text>
                    </View>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.RowHeadText}>{"申请时间:"}</Text>
                    <View style={styles.RowConText}>
                        <Text style={styles.RowConTextC}>{this.prop.applyTime}</Text>
                    </View>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.RowHeadText}>{"审核时间:"}</Text>
                    <View style={styles.RowConText}>
                        <Text style={styles.RowConTextC}>{this.prop.dealTime}</Text>
                    </View>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.RowHeadText}>{"开始时间:"}</Text>
                    <View style={styles.RowConText}>
                        <Text style={styles.RowConTextC}>{this.prop.startTime}</Text>
                    </View>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.RowHeadText}>{"结束时间:"}</Text>
                    <View style={styles.RowConText}>
                        <Text style={styles.RowConTextC}>{this.prop.endTime}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width-50,
        height: Dimensions.get('window').height-150,
        position: "relative",
        backgroundColor: '#0187d6',
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    containerHead: {
        position: "absolute",
        left: 10,
        top: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    containerHeadText: {
        textAlign: "center",
        textAlignVertical: "center",
        color: '#0187d6',
        fontSize: 25,
    },
    Row: {
        width: Dimensions.get('window').width-50,
        height: 50,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    RowHeadText: {
        width: Dimensions.get('window').width*0.35-25,
        height: 50,
        textAlign: "right",
        textAlignVertical: "bottom",
        color: "white",
        fontSize: 20,
    },
    RowConText: {
        width: Dimensions.get('window').width*0.65-50,
        height: 50,
        marginLeft: 10,
        justifyContent: "flex-end",
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'white',
    },
    RowConTextC: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        textAlignVertical: "bottom",
    }
})