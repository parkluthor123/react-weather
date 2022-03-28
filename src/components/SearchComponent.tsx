import {useContext, useState} from 'react'
import { DataContext } from '../providers/DataProvider'
import { Container, SearchWrapper } from '../styles/global'
import { formatToURL } from '../utils/Helper'

const SearchComponent: React.FC = ()=>{
    const { getCurrentWeather, getnextWeather, setCurrentCity } = useContext(DataContext);
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const getData = (e: any)=>{
        setCurrentCity(formatToURL(e.target.value))
    }
    const captureHandleKey = (e: any)=>{
        const key = e.which || e.keyCode;
        if(key == 13)
        {
            e.preventDefault();
            getCurrentWeather();
            getnextWeather();
        }
    }
    return (
        <> 
            <SearchWrapper>
                <Container>
                    <form>
                        <label htmlFor="city">City Name</label>
                        <input 
                            type="text"
                            name="city"
                            id="city"
                            onChange={getData}
                            onKeyPress={captureHandleKey}
                            onFocus={()=>setShowTooltip(true)}
                            onBlur={()=>setShowTooltip(false)}
                        />
                        {showTooltip ? <span className='tooltip'>[Press Enter Key to search]</span> : null}
                    </form>
                </Container>
            </SearchWrapper>
        </>
    )
}

export default SearchComponent