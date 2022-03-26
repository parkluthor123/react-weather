import type { NextPage } from 'next'
import SearchComponent from '../components/SearchComponent'
import WheatherHubComponent from '../components/WheatherHubComponent'
import ForecastComponent from '../components/ForecastComponent'

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
