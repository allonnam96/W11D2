import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {

  const {climateTemperature, setClimateTemperature} = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climateTemperature}°F
      </div>
      <div className="humidity">
        Humidity {"y"}%
      </div>
    </div>
  )
}

export default ClimateStats;