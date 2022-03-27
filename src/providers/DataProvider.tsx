import { useRouter } from "next/router";
import { useState, 
        useEffect,
        createContext } from "react";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import { api } from "../services/api";

type DataContextType = {
    switchTheme: ()=> void,
    getCurrentWheather: ()=> Promise<void>,
    currentWheather: any,
    nextWheather: any,
    setCurrentCity: (city: string)=> void,
    getNextWheather: ()=> void,
    setCelsius: ()=> void,
    setFarenheit: ()=> void,
    showModal: (value: boolean)=> void,
    modal: any,
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
    const [modal, setModal] = useState<boolean>(false);
    const router = useRouter();

    const switchTheme = ()=>{
        theme === 'dark' ? setTheme("light") : setTheme("dark");
        router.reload();
    }

    const showModal = (value: boolean)=>{
        setModal(value)
    }

    const setCurrentCity = (city: string)=>{
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
        })
        .catch((error) => {
            if(error instanceof Error) {
                showModal(true);
            }
        }) 
    }

    const getNextWheather = async ()=>{
        await api.get(`/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=${units}`)
        .then((response)=>{
            if(response.status == 200)
            {
                let i;
                let arrNextWeather = [];

                for(i = 0; i < response.data.list.length; i+=8)
                {
                    arrNextWeather.push(response.data.list.slice(i, i + 8));
                }
                setNextWeather(arrNextWeather)
            }
        })
        .catch((error) => {
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
                showModal,
                modal,
                nextWheather,
                setFarenheit,
                setCelsius,
                setCurrentCity,
                currentWheather, 
                getCurrentWheather,
                getNextWheather, 
                switchTheme }}>
            {children}
        </DataContext.Provider>
    )
}