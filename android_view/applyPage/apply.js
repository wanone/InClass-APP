import React, { Component } from 'react';
import {
    AppRegistry,
    applyCssheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import applyCss   from  './applyCss';

//classPage
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
    render() {
        return (
            <View style={applyCss.container}>
                <View style={applyCss.tabBar}>
                    <View style={applyCss.containerStyleTab}>
                        <View style={applyCss.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/class.png')} style={applyCss.tabImg}/>
                        </View>
                        <View style={applyCss.tabTextContainer}>
                             <Text style={applyCss.tabText}>{'教室'}</Text>
                        </View>
                    </View>
    
                    <TouchableOpacity style={applyCss.containerStyleTab}
                    onPress={()=>this._tabApply('Right')}>
                       <View style={applyCss.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/apply.png')} style={applyCss.tabImg}/>
                        </View>
                        <View style={applyCss.tabTextContainer}>
                             <Text style={applyCss.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={applyCss.containerStyleTab}
                    onPress={()=>this._tabControl('Right')}>
                       <View style={applyCss.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/control.png')} style={applyCss.tabImg}/>
                        </View>
                        <View style={applyCss.tabTextContainer}>
                             <Text style={applyCss.tabText}>{'控制'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={applyCss.containerStyleTab}
                    onPress={()=>this._tabMe('Right')}>
                       <View style={applyCss.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/me.png')} style={applyCss.tabImg}/>
                        </View>
                        <View style={applyCss.tabTextContainer}>
                             <Text style={applyCss.tabText}>{'我'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={applyCss.containerCon}></View>
            </View>
        );
    }
}
