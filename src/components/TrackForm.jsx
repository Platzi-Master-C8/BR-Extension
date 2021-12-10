import React from "react";
import { StarRating } from "./StarRating";

import "./styles/TrackForm.scss";

function TrackForm({ inputValue, setInputValue }) {
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
    <div>
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
            className="form-control"
            type="text"
            name="location"
            placeholder="Location"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.location || ""}
          />
        </div>

        <div className="form-group">
          {!!showTag.offeredSalary && (
            <label className="form-group__label">
              Offered Salary
            </label>
          )}
          <input
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

        <StarRating />

        <div className="form-group">
          {!!showTag.notes && (
            <label className="form-group__label">
              Notes
            </label>
          )}
          <input
            className="form-control"
            type="text"
            name="notes"
            placeholder="Notes"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.notes || ""}
          />
        </div>
      </form>
    </div>
  );
}

export { TrackForm };