/*
* 登录组件
*/
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
                                        component: LogSign
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
class LogSign extends Component {
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

AppRegistry.registerComponent('LogSign', () => LogSign);
module.exports = LogSign;