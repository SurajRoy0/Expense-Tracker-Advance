import React, { useContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';

const ItemContext = React.createContext({
    items: [],
    addItems: (item) => { },
});

export const ItemContextProvider = (props) => {
    const authCtx = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const modifiedEmail = authCtx.userEmail.replace("@", ".");

    const getItemsHandler = async () => {
        try {
            const res = await axios.get(
                `https://expense-tracker-b7fdf-default-rtdb.firebaseio.com/expense-tracker/${modifiedEmail}.json`);
            setItems(Object.entries(res.data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getItemsHandler();
    }, [])
    const addItemHandler = async (item) => {
        try {
            const res = await axios.post(
                `https://expense-tracker-b7fdf-default-rtdb.firebaseio.com/expense-tracker/${modifiedEmail}.json`,
                item
            );
            getItemsHandler();
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const contextValue = {
        items: items,
        addItems: addItemHandler,
    };

    return (
        <ItemContext.Provider value={contextValue}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContext;
