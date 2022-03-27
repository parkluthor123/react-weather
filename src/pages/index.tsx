import type { NextPage } from 'next'
import SearchComponent from '../components/SearchComponent'
import WheatherHubComponent from '../components/WheatherHubComponent'
import ForecastComponent from '../components/ForecastComponent'
import { Line } from 'react-chartjs-2';
import {useContext, useEffect} from 'react'
import { DataContext } from '../providers/DataProvider';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <SearchComponent />
        <WheatherHubComponent />
        <ForecastComponent />
      </main>
    </>
  )
}

export default Home
