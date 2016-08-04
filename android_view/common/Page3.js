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
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import styles              from   './commonCss';

export default class Page3 extends Component {
    render() {
        return (
            <View style={PageCss.container}>
                <Text>{"Page3"}</Text>
            </View>
        );
    }
};

let PageCss = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-94,
        backgroundColor: "green",
    }
})