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
    Dimensions
} from 'react-native';

import  styles           from   '../common/commonCss';
import  meCss            from   './meCss';
import  classPage        from   '../classPage/classPage';
import  applyPage        from   '../applyPage/applyPage';
import  controlPage      from   '../controlPage/controlPage';
import  ApplyRecord      from   './ApplyRecord';
import  ModifyPass       from   './ModifyPass';
import  SystemInform     from   './SystemInform';

class homePage extends Component {
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
    configureScene(route, routeStack) {
        if (route.type == "Right") {
            return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
        }
        return Navigator.SceneConfigs.PushFromLeft; // 左侧弹出
    }
    render() {
        return (
          <Navigator
            style={{flex:1}}
            initialRoute={{component: classPage}}
            configureScene={this.configureScene}
            renderScene={this.renderScene}/>
        );
    }
}

////////////////////////////////////////////////////mePage
class mePage extends Component {
    _tabClass(type = 'Left') {
        this.props.navigator.push({
            component: classPage,
            type: type
        })
    }
    _tabApply(type = 'Left') {
        this.props.navigator.push({
            component: applyPage,
            type: type
        })
    }
    _tabControl(type = 'Left') {
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
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabBar}>
                   <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabClass('Left')}>
                        <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabApply('Left')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabControl('Left')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/me.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'我'}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.containerCon}>
                    <View style={meCss.portraitBg}>
                        <Image source={require('../common/commonImg/start.png')} style={meCss.portrait}/>
                    </View>
                    <View style={meCss.nameCon}>
                        <Text style={meCss.nameText}>{'Wanone, 你好'}</Text>
                    </View>
                    <View style={meCss.funcCon}>
                        <ApplyRecord navigator={this.props.navigator}></ApplyRecord>
                        <SystemInform navigator={this.props.navigator}></SystemInform>
                        <ModifyPass navigator={this.props.navigator}></ModifyPass>
                    </View>
                </View>
            </View>
        );
    }
}
AppRegistry.registerComponent('mePage', () => mePage);
module.exports = mePage;