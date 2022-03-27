import type { NextPage } from 'next'
import SearchComponent from '../components/SearchComponent'
import WheatherHubComponent from '../components/WheatherHubComponent'
import ForecastComponent from '../components/ForecastComponent'
import { Line } from 'react-chartjs-2';
import Message from '../components/Message';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <SearchComponent />
        <WheatherHubComponent />
        <ForecastComponent />
        <Message/>
      </main>
    </>
  )
}

export default Home
