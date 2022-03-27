import * as react from 'react'
import { LoadingSVG } from '../styles/global'

const Loading: React.FC = ()=>{
    return(
        <>
            <LoadingSVG>
                <span></span>
            </LoadingSVG>
        </>
    )
}

export default Loading