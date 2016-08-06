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
    ScrollView
} from 'react-native';

import   OnePageR             from    './oneClass/OnePageR';
import   TwoPageR             from    './twoClass/TwoPageR';
import   ThreePageR           from    './threeClass/ThreePageR';
import   FourPageR            from    './fourClass/FourPageR';

import   FivePageR            from    './FivePageR';
import   SixPageR             from    './SixPageR';
import   SevenPageR           from    './SevenPageR';
import   EightPageR           from    './EightPageR';
import   NinePageR            from    './NinePageR';
import   ClassTabBar          from    './ClassTabBar';
import   Table                from    './Table';
import   AllCss               from    './AllCss';
import   ScrollableTabView    from    'react-native-scrollable-tab-view';
 
export default class RecommendNewPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            OnePageR : false,
　　　　　　TwoPageR : false,
　　　　　　ThreePageR : false,
            classes: "",
        };
    }
    componentWillMount() {
        this.getBuildingsR();
    }
    componentWillUnmount() {
        this.getBuildingsR();
    }
    getBuildingsR(){
        classesS = new Array();
        fetch("http://123.207.6.76/inclass/api/light/getcontrollightsbystu")
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body;
                for(var i=0; i<array.length; i++ ){
                    array[i].name=array[i].name+"教室";
                    classesS.push(array[i].name);
                };
                this.setState({classes: classesS});
                switch (Number(array.length)){
                     case 1:
                        this.setState({OnePageR: true});
                        break;
                    case 2:
                        this.setState({OnePageR: true});
                        this.setState({TwoPageR: true});
                        break;
                    default:
                        this.setState({OnePageR: true});
                        this.setState({TwoPageR: true});
                        this.setState({ThreePageR: true});
                }
            }else{
                alert("request fail");
            }
        })
        .catch((error) => {
            console.warn(error);
        })
    }
    render() {
        return (
            <View style={styles.contrainer}>
                <View style={styles.contrainerText}>
                    <Text style={styles.headText}>{"我的教室"}</Text>
                </View>
                <ScrollableTabView
                    renderTabBar={()=><ClassTabBar/>}>
                    {this.state.OnePageR ? <OnePageR tabLabel={this.state.classes[0]}></OnePageR>:false}
                    {this.state.TwoPageR ? <TwoPageR tabLabel={this.state.classes[1]}></TwoPageR>:false}
                    {this.state.ThreePageR ? <ThreePageR tabLabel={this.state.classes[2]}></ThreePageR>:false}
                </ScrollableTabView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
    },
    contrainerText: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: "#0187d6",
        justifyContent: "center",
        alignItems: "center"
    },
    headText: {
        width: Dimensions.get('window').width/4,
        height: 50,
        fontSize: 20,
        color: "white",
        textAlign: "center",
        textAlignVertical: "center"
    }
});
