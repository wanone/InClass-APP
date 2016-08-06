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

export default class Building extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Building: "",
        };
    }
    render() {
        return (
            <View style={styles.contrainer}>
                <View style={styles.contrainer404}>
                    <Text style={styles.text404}>{"404"}</Text>
                    <Text style={styles.building404}>{"当前不能选择教学楼"}</Text>
                </View>
                <View style={styles.btnCon}>
                    <TouchableOpacity style={styles.btn} onPress={this.props.closeModal}>
                        <Text style={styles.text}>{"关闭"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        width: Dimensions.get('window').width*0.9,
        height: 325,
        justifyContent: "center",
        alignItems: "center",
    },
    contrainer404: {
        width: Dimensions.get('window').width*0.9,
        height: 225,
        justifyContent: "center",
        alignItems: "center",
    },
    text404: {
        width: Dimensions.get('window').width*0.9,
        height: 170,
        fontSize: 120,
        color: "#0187d6",
        textAlign: "center",
        textAlignVertical: "center",
    },
    building404: {
        width: Dimensions.get('window').width*0.9,
        height: 50,
        fontSize: 20,
        color: "#0187d6",
        textAlign: "center",
    },
    btnCon: {
        width: Dimensions.get('window').width*0.9,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: 150,
        height: 40,
        borderRadius: 10,        
        borderWidth: 2,
        borderColor: "#0187d6",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "#0187d6",
    }
});