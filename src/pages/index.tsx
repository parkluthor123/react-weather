import type { NextPage } from 'next'
import SearchComponent from '../components/SearchComponent'
import WheatherHubComponent from '../components/WheatherHubComponent'
import ForecastComponent from '../components/ForecastComponent'
import { Line } from 'react-chartjs-2';
import GraphComponent from '../components/GraphComponent';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <SearchComponent />
        <WheatherHubComponent />
        <ForecastComponent />
        <GraphComponent/>
      </main>
    </>
  )
}

export default Home
