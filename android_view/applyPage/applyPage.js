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
import applyCss      from   './applyCss';
import classPage     from   '../classPage/classPage';
import controlPage   from   '../controlPage/controlPage';
import mePage        from   '../mePage/mePage';

export default class applyPage extends Component {
    _tabClass(type = 'Left') {
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
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabClass('Left')}>
                        <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </View>
    
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
                    <View style={applyCss.headText}>
                        <Text style={applyCss.tabText}>{"教室借用申请表"}</Text>
                    </View>
                    <View style={applyCss.tableContainer}>
                        <View style={applyCss.formRow}>
                            <Text style={applyCss.formText}>{"姓名:"}</Text>
                            <TextInput
                            style={applyCss.textInput}
                            placeholder="姓名"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            onChangeText={ (text) => this.handleChange(text)}/>

                            <Text style={applyCss.formText}>{"学号:"}</Text>
                            <TextInput
                            style={applyCss.textInput}
                            placeholder="学号"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            onChangeText={ (text) => this.handleChange(text)}/>
                        </View>

                        <View style={applyCss.formRow}>
                            <Text style={applyCss.formText}>{"班级:"}</Text>
                            <TextInput
                            style={applyCss.textInput}
                            placeholder="班级"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            onChangeText={ (text) => this.handleChange(text)}/>
                            
                            <Text style={applyCss.formText}>{"身份证:"}</Text>
                            <TextInput
                            style={applyCss.textInput}
                            placeholder="身份证"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            onChangeText={ (text) => this.handleChange(text)}/>
                        </View>

                        <View style={applyCss.formRow}>
                            <Text style={applyCss.formTextTime}>{"申请时间:"}</Text>
                            <TextInput
                            style={applyCss.textInputTime}
                            placeholder="申请时间"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            onChangeText={ (text) => this.handleChange(text)}/>
                            
                        </View>


                        <View style={applyCss.formRowCon}>
                            
                            <Text style={applyCss.formTextCon}>{"申请理由:"}</Text>
                            
                            <TextInput
                            style={applyCss.textInputCon}
                            placeholder="申请理由"
                            placeholderTextColor="#ccc"
                            multiline = {true}
                            onChangeText={ (text) => this.handleChange(text)}/>

                            <TextInput
                            style={applyCss.textInputCon}
                            placeholderTextColor="#ccc"
                            multiline = {true}
                            onChangeText={ (text) => this.handleChange(text)}/>

                            <TextInput
                            style={applyCss.textInputCon}
                            placeholderTextColor="#ccc"
                            multiline = {true}
                            onChangeText={ (text) => this.handleChange(text)}/>

                            <TextInput
                            style={applyCss.textInputCon}
                            placeholderTextColor="#ccc"
                            multiline = {true}
                            onChangeText={ (text) => this.handleChange(text)}/>
                            
                        </View>

                        <View style={applyCss.formRow}>
                            <Text style={applyCss.formTextTime}>{"证明材料:"}</Text>
                            <TextInput
                            style={applyCss.textInputTime}
                            placeholder="证明材料"
                            placeholderTextColor="#ccc"
                            secureTextEntry={true}
                            multiline = {false}
                            onChangeText={ (text) => this.handleChange(text)}/>
                        </View>
                        
                        <View style={applyCss.sureIcon}>
                            <TouchableOpacity style={applyCss.logBtn}>
                                <Text style={applyCss.styleLog}>{'提 交'}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>
        );
    }
}
