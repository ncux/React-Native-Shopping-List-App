import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { ItemsContext } from '../contexts/items/context';

const Item = ({ item }) => {

    const { deleteItem } = useContext(ItemsContext);

    return (
        <TouchableOpacity style={ styles.item }>           
           <View style={ styles.view }>
                <Text style={ styles.text }>{ item.text }</Text>
                <Icon onPress={ () => deleteItem(item.id) } name="trash" size={20} color="firebrick" />
           </View>
        </TouchableOpacity>
    );  
};

export default Item;

const styles = StyleSheet.create({

    item: {        
        padding: 15,
        backgroundColor: 'teal',
        borderBottomWidth: 1,
        borderColor: '#eeeeee'
    },

    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'        
    },

    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },

});



