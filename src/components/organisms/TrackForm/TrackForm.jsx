import React from "react";

import "./TrackForm.scss";

function TrackForm({ inputValue, setInputValue, children }) {
  const [showTag, setShowTag] = React.useState({});

  const onChange = (e) => {
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    });
  };

  const handleFocus = (e) => {
    let bool = false;

    if (e.nativeEvent.type === "focusin") {
      bool = true;
    } else {
      bool = false;
    }

    setShowTag({
      ...showTag,
      [e.target.name]: bool,
    });
  };

  return (
    <div>
      <form>
        <div className="form-group">
          {(!!inputValue.company || !!showTag.company) && (
            <label className="form-group__label">Company</label>
          )}
          <input
            id="company"
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
          {(!!inputValue.position || !!showTag.position) && (
            <label className="form-group__label">Position</label>
          )}
          <input
            id="position"
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
          {(!!inputValue.link || !!showTag.link) && (
            <label className="form-group__label">Link</label>
          )}
          <input
            id="link"
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
          {(!!inputValue.location || !!showTag.location) && (
            <label className="form-group__label">Location</label>
          )}
          <input
            id="location"
            className="form-control"
            type="text"
            name="location"
            placeholder="Location"
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleFocus}
            value={inputValue.location || ""}
          />
          <div className="form-group__checkbox-container" >
            <label className="form-group__checkbox">
              <input
                type="checkbox"
                className="input-assumpte"
                
              />
            </label>
            <span>Remote</span>
          </div>
        </div>

        <div className="form-group">
          {(!!inputValue.offeredSalary ||
            !!showTag.offeredSalary) && (
            <label className="form-group__label">
              Offered Salary
            </label>
          )}
          <input
            id="offeredSalary"
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
          {(!!inputValue.notes || !!showTag.notes) && (
            <label className="form-group__label">Notes</label>
          )}
          <input
            id="notes"
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
      </form>
    </div>
  );
}

export { TrackForm };
