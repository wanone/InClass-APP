/*
* InClass APP Code
* author:wanyinjun  Email:848540294@qq.com
* date:2016/7/13
*/

/*
* APP引用的模块
*/
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

import styles           from  './android_view/common/commonCss';
import applyCss         from  './android_view/applyPage/applyCss';
import classCss         from  './android_view/classPage/classCss';
import controlCss       from  './android_view/controlPage/controlCss';
import meCss            from  './android_view/mePage/meCss';
import ApplyRecord      from  './android_view/mePage/ApplyRecord';
import ModifyPass       from  './android_view/mePage/ModifyPass';
import SystemInform     from  './android_view/mePage/SystemInform';
import ModalBox         from  './android_view/classPage/ModalBox';
import TableCon         from  './android_view/controlPage/TableCon';
/////////////////////////////////////////////////登录注册界面
class logPage1 extends Component {
/**
* 给Navigator传递参数
* @param name 参数
* @private
*/
    _navigate(type = 'Normal') {
        this.props.navigator.push({
            component: logPage2,
            type: type
        })
    }
    render() {
        // 点击按钮使用Home页面入栈
        return (
            <View style={styles.container}>
                <Image source={require('./android_view/common/commonImg/start.png')} style={styles.bgColor}>
                    <View style={styles.logBox}>
                        <TouchableOpacity style={styles.containerStyleLog}
                        onPress={()=>this._navigate('Right')}>
                           <Text style={styles.styleLog}>{'登录'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerStyleSign}
                        onPress={()=>this._navigate('Right')}>
                          <Text style={styles.styleSign}>{'注册'}</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}





/////////////////////////////////////////////// 登录注册填写界面
class logPage2 extends Component {
    constructor(props){
        super(props);
        this.state={
          valueUser:'用户名',
          valuePass:'******'
        };
    }
    onChangeText(text){
        this.setState({valueUser:text});
    }
    handleChange(text){
        this.setState({valuePass:text});
    }
    render() {
        valueUser = this.state.valueUser;
        valuePass = this.state.valuePass;
        return (
            <View style={styles.containerLS}>
                <Image source={require('./android_view/common/commonImg/logsign.png')} style={styles.bgColor}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity style={styles.backIcon}
                        onPress={()=>this.props.navigator.pop()}>
                            <Image source={require('./android_view/common/commonImg/back.png')} style={styles.backImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logPanel}>

                        <TextInput
                        style={styles.textinput}
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        value={valueUser}
                        onChangeText={ (text) => this.onChangeText(text)}/>

                        <TextInput
                        style={styles.textinput}
                        placeholderTextColor="#ccc"
                        secureTextEntry={true}
                        multiline = {false}
                        value={valuePass}
                        onChangeText={ (text) => this.handleChange(text)}/>

                    </View>
                    <View style={styles.sureIcon}>
                        <TouchableOpacity style={styles.logBtn}
                        onPress={()=>{
                                        
                                  this.props.navigator.push({
                                        component: homePage
                                  })
                        }  }>
                           <Text style={styles.styleLog}>{'登 录'}</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
};






////////////////////////////////////////////////////app主要界面
class homePage extends Component {
/**
 * 使用动态页面加载
 * @param route 路由
 * @param navigator 导航器
 * @returns {XML} 页面
 */
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


////////////////////////////////////////////////////classPage
class classPage extends Component {
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
                            <Image source={require('./android_view/common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </View>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabApply('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabControl('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabMe('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/me.png')} style={styles.tabImg}/>
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








////////////////////////////////////////////////////applyPage
class applyPage extends Component {
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
                            <Image source={require('./android_view/common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </View>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabControl('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabMe('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/me.png')} style={styles.tabImg}/>
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


////////////////////////////////////////////////////controlPage
class controlPage extends Component {
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
                            <Image source={require('./android_view/common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabApply('Left')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </View>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabMe('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/me.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'我'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCon}>
                     <View style={controlCss.headText}>
                        <Text style={controlCss.tabText}>{"X11010教室"}</Text>
                    </View>
                    <View style={controlCss.tableContainer}>
                        <TableCon num="编号" place="位置"  condition="状态" conditionTime="状态变更时间" mode="人控模式" operate="操作" remark="备注" style={controlCss.containerTableConCellHead}></TableCon>
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon>
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon>
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                    </View>
                </View>
            </View>
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
                            <Image source={require('./android_view/common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabApply('Left')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabControl('Left')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('./android_view/common/commonImg/me.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'我'}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.containerCon}>
                    <View style={meCss.portraitBg}>
                        <Image source={require('./android_view/common/commonImg/start.png')} style={meCss.portrait}/>
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


////////////////////////////////////////////////////主模块
class inclass extends Component {
  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  /**
   * 渲染场景, 通过不同参数, 设置不同页面
   * @param route 路由, 场景信息
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  //renderScene(route, navigator) {
  //  if (route.name == 'logPage1') {
  //    return <logPage1 navigator={navigator} {...route.passProps}/>
  //  } else if (route.name == 'logPage2') {
  //    return <logPage2 navigator={navigator} {...route.passProps}/>
  //  }
  //}

  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    if (route.type == 'Right') {
      return Navigator.SceneConfigs.PushFromRight; // 底部弹出
    }
    return Navigator.SceneConfigs.FloatFromBottomAndroid; // 右侧弹出
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{component: logPage1}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}/>
    );
  }
}


AppRegistry.registerComponent('inclass', () => inclass);