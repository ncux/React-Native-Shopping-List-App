import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid';

export const ItemsContext = createContext();

export const ItemsState = props => {

    const [title, setTitle] = useState('Shopping List');

    const [items, setItems] = useState([
        { id: uuid(), text: 'Sheets' },
        { id: uuid(), text: 'Comforter' },
        { id: uuid(), text: 'Pillow cases' },
        { id: uuid(), text: 'Duvei' },
        { id: uuid(), text: 'Cloth' }
    ]);

    const deleteItem = id => {
        const filteredItems = items.filter(item => item.id != id);
        setItems(filteredItems);
    };

    const addItem = text => {
        if(text == '') return;
        const newItem = { id: uuid(), text };
        setItems([newItem, ...items]);
    };

    
    return (
        <ItemsContext.Provider value={{
            title,
            items,
            addItem,
            deleteItem
        }}>
            { props.children }
        </ItemsContext.Provider>
    )

};
