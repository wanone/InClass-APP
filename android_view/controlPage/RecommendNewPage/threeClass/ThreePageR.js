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

import   AllCss              from    '../AllCss';
import   TableCon            from    '../TableCon';    
import   immutable           from    'immutable';
import   NoBuildingAll       from    '../NoBuildingAll';
import   YesBuildingThreeA   from    './YesBuildingThreeA';

export default class ThreePageR extends Component {
    render() {
        return (
            <View style={styles.contrainer}>
            {
                this.props.state == true ? <YesBuildingThreeA/> : <YesBuildingThreeA/>
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