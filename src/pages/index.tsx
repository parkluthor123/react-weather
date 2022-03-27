import type { NextPage } from 'next'
import SearchComponent from '../components/SearchComponent'
import WeatherHubComponent from '../components/WeatherHubComponent'
import ForecastComponent from '../components/ForecastComponent'
import GraphComponent from '../components/GraphComponent';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <SearchComponent />
        <WeatherHubComponent />
        <ForecastComponent />
        <GraphComponent/>
      </main>
    </>
  )
}

export default Home
