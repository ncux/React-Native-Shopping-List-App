import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { ItemsState } from './contexts/items/context';
import Header from './components/header';
import ItemsList from './components/ItemsList';
import AddItem from './components/addItem';


const App = () => {   

    return (
        <ItemsState>            
            <View style={ styles.viewStyle }>           
                <Header />
                <AddItem />
                <ItemsList />
            </View>
        </ItemsState>
    );        
};

export default App;


const styles = StyleSheet.create({

    viewStyle: {
        flex: 1
    }

});



