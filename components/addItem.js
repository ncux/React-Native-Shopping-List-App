import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { ItemsContext } from '../contexts/items/context';

const AddItem = () => {

    const [input, setInput] = useState('');
    const { addItem } = useContext(ItemsContext);

    const onInputChange = input => setInput(input);

    return (
        <View >
            <TouchableOpacity style={ styles.touchableOpacity }>
                <TextInput onChangeText={ onInputChange } placeholder="Add item..." style={ styles.textInput } />                 
                <Icon onPress={ () => addItem(input) } name="plus" size={20} style={ styles.buttonText } />                               
            </TouchableOpacity>   
        </View>
    );    
    
};

export default AddItem;


const styles = StyleSheet.create({

    view: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'green',
        height: 60,
        paddingRight: 248,
        fontSize: 16
    },

    touchableOpacity: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 8
    },

    buttonText: {
        padding: 15,       
        color: 'teal',
        fontSize: 20,
        textAlign: 'center'
    }
});



