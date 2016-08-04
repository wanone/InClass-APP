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

export default class MenuOptionNew extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <MenuOption value={this.props.value} onPress={this.props.onPress}>
                <Text style={styles.Text}>{this.props.value}</Text>
            </MenuOption>
        )
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 18,
    }
});