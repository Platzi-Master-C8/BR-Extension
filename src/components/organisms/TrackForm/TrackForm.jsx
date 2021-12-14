import "./TrackForm.scss";
import React from "react";
import SubmitButton from '../../Atoms/Button';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox';

function TrackForm({ inputValue, setInputValue, children }) {
  const [showTag, setShowTag] = React.useState({});

  const onChange = (e) => {
    setShowTag({
      ...showTag,
      [e.target.name]: true,
    });
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    });
  };

  const handleFocus = (e) => {
    const inputName = e.target.name;
    let bool = false;

    if (!!inputValue[inputName]) {
      bool = true;
    } else if (e.nativeEvent.type === "focusin") {
      bool = true;
    } else {
      bool = false;
    }

    console.log(bool);
    setShowTag({
      ...showTag,
      [inputName]: bool,
    });
  };

  return (
      <form>
        <div className="form-group">
          {!!showTag.company && (
            <label className="form-group__label">
              Company
            </label>
          )}
          <input
            className="form-control"
            type="text"
            name="company"
            placeholder="Company"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.company || ""}
          />
        </div>

        <div className="form-group">
          {!!showTag.position && (
            <label className="form-group__label">
              Position
            </label>
          )}
          <input
            className="form-control"
            type="text"
            name="position"
            placeholder="Position"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.position || ""}
          />
        </div>

        <div className="form-group">
          {!!showTag.link && (
            <label className="form-group__label">
              Link
            </label>
          )}
          <input
            className="form-control"
            type="text"
            name="link"
            placeholder="Link"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.link || ""}
          />
        </div>

        <div className="form-group">
          {!!showTag.location && (
            <label className="form-group__label">
              Location
            </label>
          )}
          <input
            className="form-control location"
            type="text"
            name="location"
            placeholder="Location"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.location || ""}
            sx={{width:'75%'}}
          />
          <FormControlLabel
                    value="bottom"
                    control={<Checkbox color="primary" />}
                    label="¿Remote?"
                    labelPlacement="bottom"
                />
         </div>

        <div className="form-group">
          {!!showTag.offeredSalary && (
            <label className="form-group__label">
              Offered Salary
            </label>
          )}
          <input
          required
            className="form-control"
            type="text"
            name="offeredSalary"
            placeholder="Salary"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.offeredSalary || ""}
          />
        </div>

        {children}

        <div className="form-group">
          {!!showTag.notes && (
            <label className="form-group__label">
              Notes
            </label>
          )}
          <input
            required
            className="form-control large-input"
            type="text"
            name="notes"
            placeholder="Notes"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.notes || ""}
          />
        </div>
        <div className="form-group">
          <SubmitButton value='Enviar'/>
        </div>
      </form>
  );
}

export { TrackForm };