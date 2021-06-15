import React from "react"
import {RiCelsiusFill, RiFahrenheitFill} from "react-icons/ri"

const UnitCheckbox = (props) => {
    return (
      <div className="checkUnitBody">
      <input type="checkbox" className="unitcheckbox" id="unitcheckbox"/>
        <label onClick={props.handleUnitChange} htmlFor="unitcheckbox" className={props.nightMode ? "darkunitlabel":"unitlabel"}>
          <RiCelsiusFill className={props.nightMode? "darkcelsius" : "celsius"}/>
          <RiFahrenheitFill className={props.nightMode? "darkfahrenheit" : "fahrenheit"}/>
          <div className="unitball"></div>
        </label>
    </div>
    )
  }
export default UnitCheckbox;  