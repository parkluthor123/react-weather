import type { AppProps } from 'next/app'
import '../../public/icons/icomoon/style.css'
import { ThemeProvider } from 'styled-components'
import Global from '../styles/global'
import NavbarTop from '../components/NavbarTop'
import { DataProvider} from '../providers/DataProvider'
import { useEffect, useState } from 'react'
import { dark, light } from '../styles/themes'
import useLocalStorage from '../custom-hooks/useLocalStorage'
import Head from 'next/head'
import Message from '../components/Message'

function MyApp({ Component, pageProps }: AppProps) {
  const [storagedTheme, setStoragedTheme] = useLocalStorage('theme', 'dark');
  const [booleanTheme, setbooleanTheme] = useState<boolean>(false)

  const getCurrentTheme = ()=>{
      if(storagedTheme === "dark")
      {
        setbooleanTheme(false);
      }
      else{
        setbooleanTheme(true);
      }
  }
  
  useEffect(()=>{
    getCurrentTheme();
  },[])


  return(
    <DataProvider>
      <ThemeProvider theme={booleanTheme ? light : dark}>
        <Global/>
        <Head>
          <title>React Weather</title>
        </Head>
        <NavbarTop />
        <Component {...pageProps} />
        <Message/>
      </ThemeProvider>
    </DataProvider>
  )
}

export default MyApp
