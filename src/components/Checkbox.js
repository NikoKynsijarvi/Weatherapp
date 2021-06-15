
 import {FaMoon, FaSun} from "react-icons/fa"


const Checkbox = (props) => {
    return (
      <div className="checkBody">
      <input type="checkbox" className="checkbox" id="checkbox"/>
        <label onClick={props.handleNightMode} htmlFor="checkbox" className="label">
          <FaSun className="sun"/>
          <FaMoon className="moon"/>
          <div className="ball"></div>
        </label>
    </div>
    )
  }

  export default Checkbox;