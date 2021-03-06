import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import style from './style';

const options = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '8', value: '8'},
    {label: '8', value: '8'},        
        {label: '8', value: '8'},
            {label: '8', value: '8'},
                {label: '8', value: '8'},
                    {label: '8', value: '8'},                    
];

const SelectQtd = () => {
    return (
        <View style={style.container}>
            <RNPickerSelect 
                onValueChange={(value) => console.log(value)}
                items={options}
                placeholder={"teste"}
            />
           
      </View>
    )
};

export default SelectQtd;