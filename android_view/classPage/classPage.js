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

import styles        from   '../common/commonCss';
import classCss      from   './classCss';
import applyPage     from   '../applyPage/applyPage';
import controlPage   from   '../controlPage/controlPage';
import mePage        from   '../mePage/mePage';
import ModalBox      from   './ModalBox';

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
            <View style={styles.container}>
                <View style={styles.tabBar}>
                    <View style={styles.containerStyleTab}>
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
                    <View style={classCss.headText}>
                        <View style={classCss.twoTab}>
                            <TouchableOpacity style={classCss.containerStyleTab}
                            >
                                <Text style={classCss.tabText}>{'推荐'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={classCss.containerStyleTab}
                            >
                                <Text style={classCss.tabText}>{'全部'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ModalBox></ModalBox>
                </View>

            </View>
        );
    }
}
