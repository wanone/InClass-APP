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
import styles              from   '../common/commonCss';
import classCss            from   './classCss';
import RecommendNewPage    from   './RecommendNewPage';
import RecommendPage       from   './RecommendPage';
import AllNewPage          from   './AllNewPage';
import ExitAPP             from   '../common/ExitAPP';

export default class ClassPage extends Component {
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
        return true;
    };
    render() {
        return (
            <View style={PageCss.container}>
                <ScrollableTabView
                    renderTabBar={()=><DefaultTabBar/>}>
                        <RecommendPage tabLabel="推荐教室"></RecommendPage>
                        <RecommendNewPage tabLabel="全部教室"></RecommendNewPage>
                </ScrollableTabView>
            </View>
        );
    }
};

let PageCss = StyleSheet.create({
    container: {
        position: "absolute",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-94,
    }
})