import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {

  const {climateTemperature, setClimateTemperature} = useClimate();
  const {climateHumidity, setClimateHumidity} = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climateTemperature}°F
      </div>
      <div className="humidity">
        Humidity {climateHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;