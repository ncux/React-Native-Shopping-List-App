import React, { useState, useContext } from 'react';
import uuid from 'uuid';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { ItemsContext } from '../contexts/items/context';

import Item from './Item';

const ItemsList = () => {

    const { items } = useContext(ItemsContext);
    
    return (
        <View style={ styles.viewStyle }>       
          
            <FlatList data={ items } renderItem={ ({item}) => (
                <Item item={ item } />
            ) } />
        </View>
    );     
    
};

export default ItemsList;

const styles = StyleSheet.create({

   

});



