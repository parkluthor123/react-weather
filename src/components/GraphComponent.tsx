import {useContext, useEffect} from 'react'
import { Container, GraphArea } from '../styles/global'
import { dark } from '../styles/themes';
import { Line } from 'react-chartjs-2'
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    ChartType
  } from 'chart.js';
import { DataContext } from '../providers/DataProvider';
import { ChartData } from 'chart.js';


const GraphComponent: React.FC = ()=>{
    const {nextWeather, hour, temperature} = useContext(DataContext)
    Chart.defaults.color = "#fff";
    Chart.register(
        ArcElement,
        LineElement,
        BarElement,
        PointElement,
        BarController,
        BubbleController,
        DoughnutController,
        LineController,
        PieController,
        PolarAreaController,
        RadarController,
        ScatterController,
        CategoryScale,
        LinearScale,
        LogarithmicScale,
        RadialLinearScale,
        TimeScale,
        TimeSeriesScale,
        Decimation,
        Filler,
        Legend,
        Title,
        Tooltip
      );

      const data: ChartData<'line'> = {
        labels: hour,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'transparent',
            borderColor: dark.colors.primary,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: dark.colors.primary,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 6,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            responsive: true,
            data: temperature,
          }
        ],
      };
    return(
        <GraphArea>
            <Container>
                <div className="graph-wrapper">
                    <div className="grap-item">
                        <Line
                            data={data}
                        />
                    </div>
                </div>
            </Container>
        </GraphArea>
    )
}

export default GraphComponent