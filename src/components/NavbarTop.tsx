import * as react from 'react'
import { useContext, useEffect, useState } from 'react';
import { Container, NavTop, SwitchTheme } from '../styles/global';
import {DataContext} from '../providers/DataProvider'
import useLocalStorage from '../custom-hooks/useLocalStorage';

const NavbarTop: React.FC = ()=>{
    const { switchTheme } = useContext(DataContext);
    const [storagedTheme, setStoragedTheme] = useLocalStorage('theme', 'dark');
    const [booleanIcon, setBooleanIcon] = useState<boolean>(false)

    const getCurrentTheme = ()=>{
        if(storagedTheme === "dark")
        {
          setBooleanIcon(false);
        }
        else{
          setBooleanIcon(true);
        }
    }

    useEffect(()=>{
        getCurrentTheme();
    }, [])

    return(
        <>
            <NavTop>
                <Container>
                    <div className="nav-top-wrapper">
                        <h1>React Weather</h1>
                        <SwitchTheme onClick={()=>switchTheme()}>
                            {booleanIcon ?
                                <i className="icon-moon-o"></i> :
                                <i className="icon-sun"></i>
                            }
                        </SwitchTheme>
                    </div>
                </Container>
            </NavTop>
        </>
    )
}

export default NavbarTop;