import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ItemsContext } from '../contexts/items/context';

const AddItem = () => {

    const { title } = useContext(ItemsContext);

    return (
        <View style={ styles.header }>
           
            <Text style={ styles.text }>{ title }</Text>
        </View>
    );    
    
};

export default AddItem;

const styles = StyleSheet.create({

    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    },

});



