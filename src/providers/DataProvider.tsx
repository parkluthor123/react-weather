import { useRouter } from "next/router";
import { useState, 
        useContext,
        useEffect,
        createContext } from "react";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import { api } from "../services/api";

type DataContextType = {
    switchTheme: ()=> void,
    getCurrentWheather: (city: string)=> Promise<void>,
    currentWheather: any,
    // getNextWheather: ()=> Promise<void>
}

export const DataContext = createContext({} as DataContextType);

// @ts-ignore

export function DataProvider({children})
{
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const [currentWheather, setCurrentWeather] = useState<object | null>(null);
    const [nextWheather, setNextWeather] = useState<object | null>(null);
    const [city, setCity] = useState<string>('Amsterdam');

    const router = useRouter();

    const switchTheme = ()=>{
        theme === 'dark' ? setTheme("light") : setTheme("dark");
        router.reload();
    }

    const getCurrentWheather = async (city: string)=>{
        await api.get(`/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`)
        .then((response)=>{
            if(response.status == 200)
            {
                console.log(response.data)
                setCurrentWeather(response.data);
            }
            if(response.status == 401)
            {
                setCurrentWeather({
                    error: 'There is an error with the API key',
                })
            }
        })
        .catch((error) => {
            setCurrentWeather({
                error: 'Region not found in the system',
            })
            console.clear()
        }) 
    }
    

    useEffect(()=>{
        getCurrentWheather(city);
    }, [])

    // const getNextWheather = async ()=>{
        
    // }

    return(
        <DataContext.Provider 
            value={{ 
                currentWheather, 
                getCurrentWheather, 
                switchTheme }}>
            {children}
        </DataContext.Provider>
    )
}