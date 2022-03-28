import moment from "moment";
import { useRouter } from "next/router";
import { useState, 
        useEffect,
        createContext } from "react";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import { api } from "../services/api";
import { API_KEY } from "../utils/Helper";

type DataContextType = {
    switchTheme: ()=> void,
    getCurrentWeather: ()=> Promise<void>,
    currentWeather: any,
    nextWeather: any,
    setCurrentCity: (city: string)=> void,
    getnextWeather: ()=> void,
    setCelsius: ()=> void,
    setFarenheit: ()=> void,
    showModal: (value: boolean)=> void,
    modal: any,
    hour: any,
    temperature: any

}

export const DataContext = createContext({} as DataContextType);

// @ts-ignore

export function DataProvider({children})
{
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    const [currentWeather, setCurrentWeather] = useState<object | null>(null);
    const [nextWeather, setNextWeather] = useState<any>(null);
    const [city, setCity] = useState<string>('Amsterdam');
    const [units, setUnits] = useState<string>('metric');
    const [modal, setModal] = useState<boolean>(false);
    const [hour, setHour] = useState<any>([]);
    const [temperature, setTemperature] = useState<any>([]);
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

    const getCurrentWeather = async ()=>{
        await api.get(`/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`)
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

    const getnextWeather = async ()=>{
        await api.get(`/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`)
        .then((response)=>{
            if(response.status == 200)
            {
                let i;
                let arrNextWeather = [];

                for(i = 0; i < response.data.list.length; i+=7)
                {
                    arrNextWeather.push(response.data.list.slice(i, i + 7));
                }
                setNextWeather(arrNextWeather);

                // get hours array to grapic
                let arrayHours: string[] = [];
                let arrayTemperature: string[] = [];
                
                arrNextWeather[0].map((el: any)=>{
                    arrayHours.push(moment.unix(el.dt).format('HH:mm')) 
                    arrayTemperature.push(el.main.temp_max) 
                })
                setHour(arrayHours)
                setTemperature(arrayTemperature)
                //
            }
        })
        .catch((error) => {
            console.clear()
        }) 
    }

    useEffect(()=>{
        getCurrentWeather();
        getnextWeather();
    }, [units])

    return(
        <DataContext.Provider 
            value={{ 
                hour,
                temperature,
                showModal,
                modal,
                nextWeather,
                setFarenheit,
                setCelsius,
                setCurrentCity,
                currentWeather, 
                getCurrentWeather,
                getnextWeather, 
                switchTheme }}>
            {children}
        </DataContext.Provider>
    )
}