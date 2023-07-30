import React , {createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context= createContext(); 

export const Appcontext = (props) => {
    const [loading,setLoading] = useState(false);
    const [searchResults,setsearchResults] = useState(false);
    const [selectCategories,setselectCategories] = useState("New");
    const [mobileMenu,setmobileMenu] = useState(false);

    useEffect(()=>{fetchselectCategoriesData(selectCategories);

    },[selectCategories]);

    const fetchselectCategoriesData = (query)=>{
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res)=>{
            console.log(res);
            // searchResults(res)
            setLoading(false);
        });
    };

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setsearchResults,
            selectCategories,
            setselectCategories,
            mobileMenu,
            setmobileMenu

        }}>
            { props.children }
        </Context.Provider>
    );
};