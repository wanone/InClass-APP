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

export default class NoBuildingAll extends Component {
    render() {
        return (
            <View style={styles404.contrainer404}>
                <Text style={styles404.textS404}>{"404"}</Text>
                <Text style={styles404.text404}>{"当前没有推荐教室"}</Text>
            </View>
        )
    }
}

const styles404 = StyleSheet.create({
    contrainer404: {
        flex: 1,
        backgroundColor: '#0187d6',
        justifyContent: "center",
        alignItems: "center",
    },
    text404: {
        fontSize: 20,
        color: "white",
    },
    textS404: {
        width: Dimensions.get('window').width,
        height: 200,
        fontSize: 120,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
    }
});


