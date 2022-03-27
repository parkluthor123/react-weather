import { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import { Container, WheatherHubWrapper } from '../styles/global'
import Loading from './Loading';
import CurrentWeather from './CurrentWeather';

const WheatherHubComponent: React.FC = ()=>{

    const { 
        currentWheather,
        } = useContext(DataContext);

        const getCurrentWeather = ()=>{
            if(!currentWheather)
            {
                return <Loading/>
            }
            else{
                return <CurrentWeather Data={currentWheather}/>
            }
        }

    return(
        <>
            <WheatherHubWrapper>
                <Container>
                    { getCurrentWeather() }
                </Container>
            </WheatherHubWrapper>
        </>
    )
}   

export default WheatherHubComponent