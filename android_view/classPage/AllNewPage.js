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

import   OnePage             from    './OnePage';
import   TwoPage             from    './TwoPage';
import   ThreePage           from    './ThreePage';
import   FourPage            from    './FourPage';
import   FivePage            from    './FivePage';
import   SixPage             from    './SixPage';
import   SevenPage           from    './SevenPage';
import   EightPage           from    './EightPage';
import   NinePage            from    './NinePage';
import   ClassTabBar         from    './ClassTabBar';
import   ScrollableTabView   from    'react-native-scrollable-tab-view';

export default class AllNewPage extends Component{
    render() {
        return (
            <View style={styles.contrainer}>
                <ScrollableTabView
                    renderTabBar={()=><ClassTabBar/>}>
                    <OnePage   tabLabel="一教"></OnePage>
                    <TwoPage   tabLabel="二教"></TwoPage>
                    <ThreePage tabLabel="三教"></ThreePage>
                    <FourPage  tabLabel="四教"></FourPage>
                    <FivePage  tabLabel="五教"></FivePage>
                    <SixPage   tabLabel="六教"></SixPage>
                    <SevenPage tabLabel="七教"></SevenPage>
                    <EightPage tabLabel="八教"></EightPage>
                    <NinePage  tabLabel="九教"></NinePage>
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