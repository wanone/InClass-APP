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

import styles  from   './commonCssNew';

export default class TabBar extends Component {
    render() {
        return (
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
        );
    }
};
    