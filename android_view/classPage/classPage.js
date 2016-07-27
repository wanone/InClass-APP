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
import applyPage           from   '../applyPage/applyPage';
import controlPage         from   '../controlPage/controlPage';
import mePage              from   '../mePage/mePage';
import RecommendNewPage    from   './RecommendNewPage';
import AllNewPage          from   './AllNewPage';
import ExitAPP             from   '../common/ExitAPP';

export default class classPage extends Component {
    _tabClass(type = 'Right') {
        this.props.navigator.push({
            component: classPage,
            type: type
        })
    }
    _tabApply(type = 'Right') {
        this.props.navigator.push({
            component: applyPage,
            type: type
        })
    }
    _tabControl(type = 'Right') {
        this.props.navigator.push({
            component: controlPage,
            type: type
        })
    }
    _tabMe(type = 'Right') {
        this.props.navigator.push({
            component: mePage,
            type: type
        })
    }
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
            <View style={styles.container}>
                <View style={styles.tabBar}>
                    <View style={styles.containerStyleTab, styles.classTab}>
                        <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </View>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabApply('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabControl('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabMe('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/me.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'我'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCon}>
                    <ScrollableTabView
                    renderTabBar={()=><DefaultTabBar/>}>
                        <RecommendNewPage tabLabel="推荐"></RecommendNewPage>
                        <AllNewPage    tabLabel="全部"></AllNewPage>
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
};
