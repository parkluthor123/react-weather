import * as React from 'react'
import { ForecastBoxWrapper } from '../styles/global'

interface ForecastLayout {
  Day?: string,
  Week?: string,
  CodeIcon?: string,
  Max?: string,
  Min?: string,
  Description?: string
}

const ForecastBox: React.FC<ForecastLayout> = (props: ForecastLayout)=> {
  return (
    <>
        <ForecastBoxWrapper>
            <div className="day-week">
              <span>Fri 29</span>
            </div>
            <div className="status-icons">
              <i className="icon-cloudy"></i>
            </div>
            <div className="wheather-balance">
              <span className="max-degrees">21°</span>
              <span className="min-degrees">10°</span>
            </div>
            <div className="status-description">
              <p>light rain</p>
            </div>
        </ForecastBoxWrapper>
    </>
  )
}

export default ForecastBox
