import { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import { Container, WeatherHubWrapper } from '../styles/global'
import Loading from './Loading';
import CurrentWeather from './CurrentWeather';

const WeatherHubComponent: React.FC = ()=>{

    const { 
        currentWeather,
        } = useContext(DataContext);

        const getCurrentWeather = ()=>{
            if(!currentWeather)
            {
                return <Loading/>
            }
            else{
                return <CurrentWeather Data={currentWeather}/>
            }
        }

    return(
        <>
            <WeatherHubWrapper>
                <Container>
                    { getCurrentWeather() }
                </Container>
            </WeatherHubWrapper>
        </>
    )
}   

export default WeatherHubComponent