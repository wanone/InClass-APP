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

import   AllCss              from    './AllCss';
import   Table               from    './Table';  
import   immutable           from    'immutable';
import   NoBuildingAll       from    './NoBuildingAll';
import   YesBuildingOne      from    './YesBuildingOne';

export default class OnePageR extends Component {
    render() {
        return (
            <View style={styles.contrainer}>
            {
                this.props.state == true ? <YesBuildingOne/> : <NoBuildingAll/>
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1
    }
});