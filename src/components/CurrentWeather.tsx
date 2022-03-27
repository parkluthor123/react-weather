import moment from "moment";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import { getDay } from "../utils/Helper";

interface DataObject{
    Data: object | any,
}
const CurrentWeather: React.FC<DataObject> = (props: DataObject)=>{
    const {setCelsius, setFarenheit} = useContext(DataContext);
    return(
        <>
            <div className="weather-scales-area">
                <div className="weather-scales-wrapper">
                    <div className="local-area">
                        <span>{`${props.Data.name}, ${props.Data.sys.country}`}</span>
                    </div>
                    <div className="weather-scales">
                        <div className="degrees">
                            <span>{(props.Data.main?.temp)?.toFixed(0)}°</span>
                        </div>
                        <div className="scales">
                            <button type="button" onClick={setCelsius}>C</button>
                            <button type="button" onClick={setFarenheit}>F</button>
                        </div>
                    </div>
                    <div className="week-day">
                        <p>{getDay(moment.unix(props.Data.dt).isoWeekday())}, {props.Data.weather[0]?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentWeather