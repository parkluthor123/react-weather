import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../providers/DataProvider'
import { Container,
         ForecastArea } from '../styles/global'
import ForecastBox from './ForecastBox'
import Loading from './Loading'
import moment from 'moment'
import { getDay } from '../utils/Helper'

const ForecastComponent: React.FC = ()=>{
    const { nextWeather } = useContext(DataContext);

    function getMaxOfArray(numArray: any) {
        return Math.max.apply(null, numArray);
    }

    function getMinOfArray(numArray: any) {
        return Math.min.apply(null, numArray);
    }

    const getDaysForecast = ()=>{
        return(
            !nextWeather ? 
                <Loading/> :
                nextWeather?.map((weather: any, index: any)=>{
                    if(index != 0){
                        let maxT = [];
                        let minT = [];
                        for(let i = 0; i < weather.length; i++)
                        {
                            maxT.push(weather[i].main.temp_max);
                            minT.push(weather[i].main.temp_min);
                        }

                        return(
                            <React.Fragment key={index}>
                                <ForecastBox 
                                    DayShort={getDay(moment.unix(weather[0]?.dt).isoWeekday(), true)}
                                    DayNumber={moment.unix(weather[0].dt).date()}
                                    Max={Math.trunc(getMaxOfArray(maxT))}
                                    Min={Math.trunc(getMinOfArray(minT))}
                                    Description={weather[0]?.weather[0].description}
                                    CodeIcon={weather[0]?.weather[0].icon}
                                />
                            </React.Fragment>
                        )
                    }
                })
        )
    }

    return(
        <>
            <ForecastArea>
                <Container>
                    <div className="forecast-title">
                        <h1>5 DAYS FORECAST</h1>
                    </div>
                    <div className="forecast-wrapper">
                        {getDaysForecast()}
                    </div>
                </Container>
            </ForecastArea>
        </>
    )
}

export default ForecastComponent