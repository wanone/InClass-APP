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

import   ScrollableTabView  from   'react-native-scrollable-tab-view';
import   styles             from   './commonCss';
import   ClassPage          from   '../classPage/ClassPage';
import   ApplyPage          from   '../applyPage/ApplyPage';
import   ControlPage        from   '../controlPage/ControlPage';
import   MePage             from   '../mePage/MePage';
import   ClassTabBarNew     from   './ClassTabBarNew';

export default class AppPage extends Component {
    render() {
        return (
            <ScrollableTabView
            renderTabBar={()=><ClassTabBarNew/>}>
                <ClassPage   tabLabel="教室"></ClassPage>
                <ApplyPage   tabLabel="申请"></ApplyPage>
                <ControlPage tabLabel="控制"></ControlPage>
                <MePage      tabLabel="我"></MePage>
            </ScrollableTabView>
        );
    }
};