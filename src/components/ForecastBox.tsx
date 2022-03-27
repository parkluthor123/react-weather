import {useEffect, useState} from 'react'
import { ForecastBoxWrapper } from '../styles/global'

interface ForecastLayout {
  DayShort?: string,
  DayNumber?: number,
  CodeIcon?: string,
  Max?: any,
  Min?: any,
  Description?: string | null
}

const ForecastBox: React.FC<ForecastLayout> = (props: ForecastLayout)=> {
  return (
    <>
        <ForecastBoxWrapper>
            <div className="day-week">
              <span>{props.DayShort} {props.DayNumber}</span>
            </div>
            <div className="status-icons">
              <img className="icon-cloudy" src={`https://openweathermap.org/img/wn/${props.CodeIcon}.png`}/>
            </div>
            <div className="wheather-balance">
              <span className="max-degrees">{props.Max}°</span>
              <span className="min-degrees">{props.Min}°</span>
            </div>
            <div className="status-description">
              <p>{props.Description}</p>
            </div>
        </ForecastBoxWrapper>
    </>
  )
}

export default ForecastBox
