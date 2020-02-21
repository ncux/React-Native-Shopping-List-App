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

    
    return (
        <ItemsContext.Provider value={{
            title,
            items,
            deleteItem
        }}>
            { props.children }
        </ItemsContext.Provider>
    )

};
