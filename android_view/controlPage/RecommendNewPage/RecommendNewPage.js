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
            OnePageRR : false,
            TwoPageRR : false,
            ThreePageRR : false,
            FourPageRR : false,
            FivePageRR : false,
            SixPageRR : false,
            SevenPageRR : false,
            EightPageRR : false,
            NinePageRR : false,
            OnePageR : true,
　　　　　　TwoPageR : false,
　　　　　　ThreePageR : false,
　　　　　　FourPageR : false,
　　　　　　FivePageR : false,
　　　　　　SixPageR : false,
　　　　　　SevenPageR : false,
　　　　　　EightPageR : false,
　　　　　　NinePageR : false
        };
    }
    componentWillMount() {
        this.getBuildings();
        this.getBuildingsR();
    }
    componentWillUnmount() {
        this.getBuildings();
        this.getBuildingsR();
    }
    getBuildings(){
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
                            this.setState({OnePageRR: true});
                            break;
                        case 2:
                            this.setState({TwoPageRR: true});
                            break;
                        case 3:
                            this.setState({ThreePageRR: true});
                            break;
                        case 4:
                            this.setState({FourPageRR: true});
                            break;
                        case 5:
                            this.setState({FivePageRR: true});
                            break;
                        case 6:
                            this.setState({SixPageRR: true});
                            break;
                        case 7:
                            this.setState({SevenPageRR: true});
                            break;
                        case 8:
                            this.setState({EightPageRR: true});
                            break;
                        case 9:
                            this.setState({NinePageRR: true});
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
    getBuildingsR(){
        var datas = new Array();
        fetch("http://192.168.1.169:8080/inclass/api/light/getcontrollightsbystu")
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                var array = data.body;
                alert(array.length);
            }else{
                alert("request fail");
            }
        })
        .catch((error) => {
            console.warn(error);
        })
    }
    render() {
        var classes=new Array();  //server data
        classes = ["X1101教室", "X1102教室", "X1103教室", "X1104教室", "X1105教室", "X1106教室", "X1107教室", "X1108教室", "X1109教室"]; 
        return (
            <View style={styles.contrainer}>
                <View style={styles.contrainerText}>
                    <Text style={styles.headText}>{"我的教室"}</Text>
                </View>
                <ScrollableTabView
                    renderTabBar={()=><ClassTabBar/>}>
                    <OnePageR    tabLabel={classes[0]}   state={this.state.OnePageRR}></OnePageR>
                   
                    {this.state.ThreePageR ? <ThreePageR  tabLabel={classes[2]}   state={this.state.ThreePageRR}></ThreePageR>:false}
                    {this.state.FourPageR ? <FourPageR   tabLabel={classes[3]}   state={this.state.FourPageRR}></FourPageR>:false}
                    
                    {this.state.SixPageR ? <SixPageR    tabLabel={classes[5]}   state={this.state.SixPageRR}></SixPageR>:false}
                    {this.state.SevenPageR ? <SevenPageR  tabLabel={classes[6]}   state={this.state.SevenPageRR}></SevenPageR>:false}
                    {this.state.EightPageR ? <EightPageR  tabLabel={classes[7]}   state={this.state.EightPageRR}></EightPageR>:false}
                    {this.state.NinePageR ? <NinePageR   tabLabel={classes[8]}   state={this.state.NinePageRR}></NinePageR>:false}
                </ScrollableTabView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        marginBottom: 36,
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
