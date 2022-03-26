import * as react from 'react'
import { Container, SearchWrapper } from '../styles/global'
const SearchComponent: React.FC = ()=>{
    return (
        <> 
            <SearchWrapper>
                <Container>
                    <form>
                        <label htmlFor="city">City Name</label>
                        <input type="text" name="city" id="city"/>
                    </form>
                </Container>
            </SearchWrapper>
        </>
    )
}

export default SearchComponent