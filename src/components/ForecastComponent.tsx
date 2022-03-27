import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../providers/DataProvider'
import { Container,
         ForecastArea } from '../styles/global'
import ForecastBox from './ForecastBox'
import Loading from './Loading'
import moment from 'moment'
import { getDay } from '../utils/Helper'

const ForecastComponent: React.FC = ()=>{
    const { nextWheather } = useContext(DataContext);
    // console.log(nextWheather)
    const getDaysForecast = ()=>{
        return(
            !nextWheather ? 
                <Loading/> :
                nextWheather?.map((weather: any, index: any)=>(
                    <React.Fragment key={index}>
                        <ForecastBox 
                            DayShort={getDay(moment.unix(weather[0]?.dt).isoWeekday(), true)}
                            DayNumber={moment.unix(weather[0].dt).date()}
                            Max={Math.trunc(weather[0]?.main.temp_max)}
                            Min={Math.trunc(weather[7]?.main.temp_min)}
                            Description={weather[0]?.weather[0].description}
                            CodeIcon={weather[0]?.weather[0].icon}
                        />
                    </React.Fragment>
                ))
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