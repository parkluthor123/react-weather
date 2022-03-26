import { useRouter } from "next/router";
import { useState, 
        useContext,
        useEffect,
        createContext } from "react";
import useLocalStorage from "../custom-hooks/useLocalStorage";

type DataContextType = {
    switchTheme: ()=> void
}

export const DataContext = createContext({} as DataContextType);

// @ts-ignore

export function DataProvider({children})
{
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    const router = useRouter();
    const switchTheme = ()=>{
        theme === 'dark' ? setTheme("light") : setTheme("dark");
        router.reload();
    }

    return(
        <DataContext.Provider value={{ switchTheme }}>
            {children}
        </DataContext.Provider>
    )
}