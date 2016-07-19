import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

import Select           from  './select';
import Option           from  './option';
import OptionList       from  './optionList';
import updatePosition   from  './updatePosition';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canada: ''
        };
    }
  
    componentDidMount() {
        updatePosition(this.refs['SELECT1']);
        updatePosition(this.refs['OPTIONLIST']);
    }
  
    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }
  
  
    _canada(province) {
  
        this.setState({
            ...this.state,
            canada: province
        });
    }
  
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Select
                width={250}
                ref="SELECT1"
                optionListRef={this._getOptionList.bind(this)}
                defaultValue="Select a Province in Canada ..."
                onSelect={this._canada.bind(this)}>
      
                    <Option>Alberta</Option>
                    <Option>British Columbia</Option>
                    <Option>Manitoba</Option>
                    <Option>New Brunswick</Option>
                    <Option>Newfoundland and Labrador</Option>
                    <Option>Northwest Territories</Option>
                    <Option>Nova Scotia</Option>
                    <Option>Nunavut</Option>
                    <Option>Ontario</Option>
                    <Option>Prince Edward Island</Option>
                    <Option>Quebec</Option>
                    <Option>Saskatchewan</Option>
                    <Option>Yukon</Option>
    
                </Select>
      
                <OptionList ref="OPTIONLIST"/>
            </View>
        );
    }
}

AppRegistry.registerComponent('Dropdown', () => Dropdown);
module.exports = Dropdown;