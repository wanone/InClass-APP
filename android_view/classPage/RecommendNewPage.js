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
import   ScrollableTabView    from    'react-native-scrollable-tab-view';

export default class AllNewPage extends Component{
    render() {
        return (
            <View style={styles.contrainer}>
                <ScrollableTabView
                    renderTabBar={()=><ClassTabBar/>}>
                    <OnePageR   tabLabel="一教"></OnePageR>
                    <TwoPageR   tabLabel="二教"></TwoPageR>
                    <ThreePageR tabLabel="三教"></ThreePageR>
                    <FourPageR  tabLabel="四教"></FourPageR>
                    <FivePageR  tabLabel="五教"></FivePageR>
                    <SixPageR   tabLabel="六教"></SixPageR>
                    <SevenPageR tabLabel="七教"></SevenPageR>
                    <EightPageR tabLabel="八教"></EightPageR>
                    <NinePageR  tabLabel="九教"></NinePageR>
                </ScrollableTabView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        marginBottom: 50,
    },
});