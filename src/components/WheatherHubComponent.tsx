import { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import { Container, WheatherHubWrapper } from '../styles/global'
import Loading from './Loading';
import { getDay } from '../utils/Helper';

const WheatherHubComponent: React.FC = ()=>{

    const { currentWheather } = useContext(DataContext);
    useEffect(()=>{ getDay() },[])

    return(
        <>
            <WheatherHubWrapper>
                <Container>
                    {!currentWheather ? 
                        <Loading/> :
                            <div className="weather-scales-area">
                                <div className="weather-scales-wrapper">
                                    <div className="local-area">
                                        <span>{`${currentWheather?.name}, ${currentWheather?.sys?.country}`}</span>
                                    </div>
                                    <div className="weather-scales">
                                        <div className="degrees">
                                            <span>{(currentWheather?.main?.temp)?.toFixed(0)}°</span>
                                        </div>
                                        <div className="scales">
                                            <button type="button">C</button>
                                            <button type="button">F</button>
                                        </div>
                                    </div>
                                    <div className="week-day">
                                        <p>Thursday, {currentWheather?.weather[0]?.description}</p>
                                    </div>
                                </div>
                            </div>
                    }
                </Container>
            </WheatherHubWrapper>
        </>
    )
}   

export default WheatherHubComponent