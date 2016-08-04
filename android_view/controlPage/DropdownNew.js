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
    ScrollView,
    ListView,
    TouchableHighlight
} from 'react-native';

import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-menu';

import   MenuOptionNew      from   "./MenuOptionNew"
import   ViewNew            from   "./ViewNew"
import   YesBuildingOne     from   './YesBuildingOne';
import   YesBuildingTwo     from   './YesBuildingTwo';
import   YesBuildingThree   from   './YesBuildingThree';
import   YesBuildingFour    from   './YesBuildingFour';
import   YesBuildingFive    from   './YesBuildingFive';
import   YesBuildingSix     from   './YesBuildingSix';
import   YesBuildingSeven   from   './YesBuildingSeven';
import   YesBuildingEight   from   './YesBuildingEight';
import   YesBuildingNine    from   './YesBuildingNine';

export default class DropdownNew extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dropdownSelection: this.props.build[0],
            MenuOption1 : true,
            MenuOption2 : false,
            MenuOption3 : false,
            MenuOption4 : false,
            MenuOption5 : false,
            MenuOption6 : false,
            MenuOption7 : false,
            MenuOption8 : false,
            MenuOption9 : false,
            YesBuildingOne : true,
            YesBuildingTwo : false,
            YesBuildingThree : false,
            YesBuildingFour : false,
            YesBuildingFive : false,
            YesBuildingSix : false,
            YesBuildingSeven : false,
            YesBuildingEight : false,
            YesBuildingNine : false
        };
    }
    componentWillMount() {
        this.getMenuOptions();
    }
    componentWillUnmount() {
        this.getMenuOptions();
    }
    componentDidUpdate(){
        this.show();
    }
    getMenuOptions(){
        var datas = new Array();
        fetch("http://123.207.6.76/inclass/api/classroom/getbuildings")
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body.buildings;
                for(var i=0; i<array.length; i++ ){
                    switch (Number(array[i].building)){
                        case 1:
                            this.setState({MenuOption1: true});
                            break;
                        case 2:
                            this.setState({MenuOption2: true});
                            break;
                        case 3:
                            this.setState({MenuOption3: true});
                            break;
                        case 4:
                            this.setState({MenuOption4: true});
                            break;
                        case 5:
                            this.setState({MenuOption5: true});
                            break;
                        case 6:
                            this.setState({MenuOption6: true});
                            break;
                        case 7:
                            this.setState({MenuOption7: true});
                            break;
                        case 8:
                            this.setState({MenuOption8: true});
                            break;
                        case 9:
                            alert("ok9");
                            this.setState({MenuOption9: true});
                            break;
                        default:
                            alert("no");
                    }
                }
            }else{
                alert("request fail");
            }
        })
        .catch((error) => {
            console.warn(error);
        })
    }
    show(){
        switch (this.state.dropdownSelection){
            case this.props.build[0]:
                alert("ok");
                this.show1();
                break;
            case this.props.build[1]:
                this.show2();
                break;
            case this.props.build[2]:
                this.show3();
                break;
            case this.props.build[3]:
                this.show4();
                break;
            case this.props.build[4]:
                this.show5();
                break;
            case this.props.build[5]:
                this.show6();
                break;
            case this.props.build[6]:
                this.show7();
                break;
            case this.props.build[7]:
                this.show8();
                break;
            case this.props.build[8]:
                this.show9();
                break;
            default:
                alert("no");
        }
    }
    render() {
        return (
            <MenuContext style={{ flex: 1 }} ref="MenuContext">
                <View style={styles.content}>
                    <Menu style={styles.dropdown} onSelect={(value) => this.setState({ dropdownSelection : value })}>  
                        
                        <MenuTrigger style={styles.menuTrigger}>
                            <Text style={styles.containerSelectText}>{this.state.dropdownSelection}</Text>
                            <View style={styles.containerSelectImg}>
                                <Image source={require('./triangle.png')} style={styles.triangleImg}/>
                            </View>
                        </MenuTrigger>


                        <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                        renderOptionsContainer={(options) => <ScrollView>{options}</ScrollView>}>

                        {this.state.MenuOption1 == true ? <MenuOptionNew value={this.props.build[0]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption2 == true ? <MenuOptionNew value={this.props.build[1]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption3 == true ? <MenuOptionNew value={this.props.build[2]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption4 == true ? <MenuOptionNew value={this.props.build[3]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption5 == true ? <MenuOptionNew value={this.props.build[4]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption6 == true ? <MenuOptionNew value={this.props.build[5]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption7 == true ? <MenuOptionNew value={this.props.build[6]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption8 == true ? <MenuOptionNew value={this.props.build[7]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}
                        {this.state.MenuOption9 == true ? <MenuOptionNew value={this.props.build[8]} onPress={(value) => this.setState({ dropdownSelection : value })}></MenuOptionNew> : <View/>}

                        </MenuOptions>

                    </Menu>
                </View>
                <View style={styles.contrainerClass}>
                {this.state.YesBuildingOne ? <YesBuildingOne/> : false}
                {this.state.YesBuildingTwo ? <YesBuildingTwo/> : false}
                </View>
            </MenuContext>
        )  
    }  
}

const styles = StyleSheet.create({
    menuTrigger: {
        width: Dimensions.get('window').width/2,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },  
    menuTriggerText: {
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white'
    },   
    content: {
        width: Dimensions.get('window').width,
        paddingLeft: Dimensions.get('window').width/4,
        height: 50,
        backgroundColor: "#0187d6",
    },  
    contentText: {
        fontSize: 20
    },
    dropdown: {
        width: Dimensions.get('window').width,
        height: 50,
    }, 
    dropdownOptions: {
        width: Dimensions.get('window').width,
        height: 250,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        fontSize: 18,
    },
    containerSelectTab: {
        width: Dimensions.get('window').width/2,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    containerSelectImg: {
        width: 30,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    containerSelectText: {
        fontSize: 20,
        color: "white"
    },
    backImg: {
        width: 20,
        height: 20,
    },
    triangleImg: {
        width: 15,
        height: 15
    },
    classCon: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-144,
        backgroundColor: "red",
    },
    contrainerClass: {
        position: "absolute",
        left: 0,
        top: 50,
        zIndex: -1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-144,
        backgroundColor: "red",
    }  
});

module.exports = DropdownNew;