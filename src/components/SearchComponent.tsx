import {useContext, useState} from 'react'
import { DataContext } from '../providers/DataProvider'
import { Container, SearchWrapper } from '../styles/global'
import { formatToURL } from '../utils/Helper'

const SearchComponent: React.FC = ()=>{
    const { getCurrentWheather, getCurrentCity } = useContext(DataContext);
    const [city, setCity] = useState<string>('')

    const getData = (e: any)=>{
        getCurrentCity(formatToURL(e.target.value))
    }
    const captureHandleKey = (e: any)=>{
        const key = e.which || e.keyCode;
        if(key == 13)
        {
            e.preventDefault();
            getCurrentWheather();
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
                        />
                    </form>
                </Container>
            </SearchWrapper>
        </>
    )
}

export default SearchComponent