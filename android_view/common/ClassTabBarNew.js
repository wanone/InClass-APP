const React = require('react');
const ReactNative = require('react-native');
const {
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    TouchableOpacity,
    Image
} = ReactNative;

const Button = require('./Button')

const ClassTabBarNew = React.createClass({

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        underlineColor: React.PropTypes.string,
        underlineHeight: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: View.propTypes.style,
    },

    getDefaultProps() {
      return {
        activeTextColor: 'white',
        inactiveTextColor: '#ccc',
        underlineColor: '#0187d6',
        backgroundColor: 'transparent',
        underlineHeight: 0,
      };
    },

    renderTabOption(name, page) {
        const isTabActive = this.props.activeTab === page;
        const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;
        const fontWeight = isTabActive ? 'bold' : 'normal';
        const fontSize = isTabActive ? 16 : 14;
        return <Button
            style={{flex: 1}}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => this.props.goToPage(page)}>
            <View style={[stylesBar.tab, this.props.tabStyle]}>
                <Text style={[{color: textColor, fontWeight, fontSize}, textStyle, ]}>
                  {name}
                </Text>
            </View>
        </Button>;
    },

    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: this.props.underlineHeight,
            backgroundColor: this.props.underlineColor,
            bottom: 0,
        };

    const left = this.props.scrollValue.interpolate({
        inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });

    return (
        <View style={[stylesBar.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            <Animated.View style={[tabUnderlineStyle, { left, }, ]} />
            <View style={stylesBar.tabBar}>
                <View style={stylesBar.containerStyleTab, stylesBar.classTab}>
                    <View style={stylesBar.tabContainer}>
                        <Image source={require('../common/commonImg/class.png')} style={stylesBar.tabImg}/>
                    </View>
                    <View style={stylesBar.tabTextContainer}>
                         <Text style={stylesBar.tabText}>{''}</Text>
                    </View>
                </View>
                <TouchableOpacity style={stylesBar.containerStyleTab}
                >
                   <View style={stylesBar.tabContainer}>
                        <Image source={require('../common/commonImg/apply.png')} style={stylesBar.tabImg}/>
                    </View>
                    <View style={stylesBar.tabTextContainer}>
                         <Text style={stylesBar.tabText}>{''}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesBar.containerStyleTab}
                >
                   <View style={stylesBar.tabContainer}>
                        <Image source={require('../common/commonImg/control.png')} style={stylesBar.tabImg}/>
                    </View>
                    <View style={stylesBar.tabTextContainer}>
                         <Text style={stylesBar.tabText}>{''}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={stylesBar.containerStyleTab}
                >
                   <View style={stylesBar.tabContainer}>
                        <Image source={require('../common/commonImg/me.png')} style={stylesBar.tabImg}/>
                    </View>
                    <View style={stylesBar.tabTextContainer}>
                         <Text style={stylesBar.tabText}>{''}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
  },
});

const stylesBar = StyleSheet.create({
    tab: {
        width: Dimensions.get('window').width/4,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    tabs: {
        position: "absolute",
        height: 70,
        top: Dimensions.get('window').height-93,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#ccc',
    },
    tabBar: {
        position: "relative",
        zIndex: -1,
        width: Dimensions.get('window').width,
        height: 70,
        backgroundColor:'#0187d6',
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row"
    },
    tabImg: {
        width: 35,
        height: 40,
        resizeMode: "contain"
    },
    tabContainer: {
        width: Dimensions.get('window').width/4,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8  
    },
    tabTextContainer: {
        width: Dimensions.get('window').width/4,
        height: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    tabText: {
        fontSize: 16,
        color: "white"
    },
});

module.exports = ClassTabBarNew;