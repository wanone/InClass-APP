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

import   OnePageR             from    './OnePageR';
import   TwoPageR             from    './TwoPageR';
import   ThreePageR           from    './ThreePageR';
import   FourPageR            from    './FourPageR';
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
            NinePageRR : false
        };
    }
    componentWillMount() {
        this.getBuildings();
    }
    componentWillUnmount() {
        this.getBuildings();
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
    render() {
        return (
            <View style={styles.contrainer}>
                <ScrollableTabView
                    renderTabBar={()=><ClassTabBar/>}>
                    <OnePageR   tabLabel="一教" state={this.state.OnePageRR}></OnePageR>
                    <TwoPageR   tabLabel="二教" state={this.state.TwoPageRR}></TwoPageR>
                    <ThreePageR tabLabel="三教" state={this.state.ThreePageRR}></ThreePageR>
                    <FourPageR  tabLabel="四教" state={this.state.FourPageRR}></FourPageR>
                    <FivePageR  tabLabel="五教" state={this.state.FivePageRR}></FivePageR>
                    <SixPageR   tabLabel="六教" state={this.state.SixPageRR}></SixPageR>
                    <SevenPageR tabLabel="七教" state={this.state.SevenPageRR}></SevenPageR>
                    <EightPageR tabLabel="八教" state={this.state.EightPageRR}></EightPageR>
                    <NinePageR  tabLabel="九教" state={this.state.NinePageRR}></NinePageR>
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
});
