import { useRouter } from "next/router";
import { useState, 
        useContext,
        useEffect,
        createContext } from "react";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import { api } from "../services/api";

type DataContextType = {
    switchTheme: ()=> void,
    getCurrentWheather: ()=> Promise<void>,
    currentWheather: any,
    getCurrentCity: (city: string)=> void,
    setCelsius: ()=> void,
    setFarenheit: ()=> void,
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
    const [units, setUnits] = useState<string>('metric');

    const router = useRouter();

    const switchTheme = ()=>{
        theme === 'dark' ? setTheme("light") : setTheme("dark");
        router.reload();
    }

    const getCurrentCity = (city: string)=>{
        setCity(city)
    }

    const setCelsius = ()=>{
        setUnits('metric');
    }

    const setFarenheit = ()=>{
        setUnits('imperial');
    }

    const getCurrentWheather = async ()=>{
        await api.get(`/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=${units}`)
        .then((response)=>{
            if(response.status == 200)
            {
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

    const getNextWheather = async ()=>{
        await api.get(`/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=${units}`)
        .then((response)=>{
            if(response.status == 200)
            {
                console.log(response.data)
                setNextWeather(response.data);
            }
            if(response.status == 401)
            {
                setNextWeather({
                    error: 'There is an error with the API key',
                })
            }
        })
        .catch((error) => {
            setNextWeather({
                error: 'Region not found in the system',
            })
            console.clear()
        }) 
    }

    useEffect(()=>{
        getCurrentWheather();
        getNextWheather();
    }, [units])

    return(
        <DataContext.Provider 
            value={{ 
                setFarenheit,
                setCelsius,
                getCurrentCity,
                currentWheather, 
                getCurrentWheather, 
                switchTheme }}>
            {children}
        </DataContext.Provider>
    )
}