import React from "react";

import "./CheckBox.scss";
import { ReactComponent as Checkmark } from '@images/checkmark.svg'

function CheckBox() {
  const [remote, setRemote] = React.useState(false)

  // useEffect(() => {

  // }, []);
  const onChange = () => {
    setRemote(!remote);
  }
  
  return (
    <div className="checkbox__container">
      <label className="checkbox__label" >
        <div className="checkbox__label-circle">
          <input
            type="checkbox"
            className="checkbox__input"
            onChange={onChange}
          />
          <div className={`checkbox__box ${!remote && "unactive"}`} >
            {!!remote && <Checkmark className="checkbox__box-checkmark" />}
          </div>
        </div>
          <span>Remote</span>
      </label>
    </div>
  );
}

export { CheckBox };
