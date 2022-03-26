import * as react from 'react'
import { Container, WheatherHubWrapper } from '../styles/global'

const WheatherHubComponent: React.FC = ()=>{
    return(
        <>
            <WheatherHubWrapper>
                <Container>
                    <div className="weather-scales-area">
                        <div className="weather-scales-wrapper">
                            <div className="local-area">
                                <span>Amsterdã, NL</span>
                            </div>
                            <div className="weather-scales">
                                <div className="degrees">
                                    <span>7°</span>
                                </div>
                                <div className="scales">
                                    <button type="button">C</button>
                                    <button type="button">F</button>
                                </div>
                            </div>
                            <div className="week-day">
                                <p>Thursday, ligh rain</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </WheatherHubWrapper>
        </>
    )
}   

export default WheatherHubComponent