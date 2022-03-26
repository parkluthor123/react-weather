import * as react from 'react'
import { Container,
         ForecastArea } from '../styles/global'
import ForecastBox from './ForecastBox'

const ForecastComponent: React.FC = ()=>{
    return(
        <>
            <ForecastArea>
                <Container>
                    <div className="forecast-title">
                        <h1>5 DAYS FORECAST</h1>
                    </div>
                    <div className="forecast-wrapper">
                        <ForecastBox />
                        <ForecastBox />
                        <ForecastBox />
                        <ForecastBox />
                        <ForecastBox />
                    </div>
                </Container>
            </ForecastArea>
        </>
    )
}

export default ForecastComponent