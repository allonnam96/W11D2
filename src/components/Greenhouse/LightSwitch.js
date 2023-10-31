import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const {themeName, setThemeName } = useTheme();

  const handleClick = e => {
    e.preventDefault();
    console.log(e.target);
    e.target.className === "on" ? setThemeName("day") : setThemeName("night");
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div>
        <button onClick = {handleClick} className="on"> DAY </button>
      </div>
      <div>
        <button onClick = {handleClick} className="off"> NIGHT </button>
      </div>
        
    </div>
  );
}

export default LightSwitch;