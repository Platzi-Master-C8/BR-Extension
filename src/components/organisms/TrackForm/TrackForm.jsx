import "./TrackForm.scss";

import { CheckBox } from "../../atoms/CheckBox/CheckBox";
import { CurrencyInput } from "../../atoms/CurrencyInput/CurrencyInput";
import React from "react";
import SubmitButton from "../../atoms/Button/Button";

function TrackForm({ inputValue, setInputValue, children, onSubmit }) {
  const [showTag, setShowTag] = React.useState({});
  const [openCurrency, setOpenCurrency] = React.useState(false);

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

  const onCurrencyClick = (e) => {
    e.preventDefault();
    setOpenCurrency(!openCurrency);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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

        <div id="locationContainer" className="form-group">
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
          <CheckBox />
        </div>

        <div id="salaryContainer" className="form-group">
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
          <div id="currencyInput">
            <CurrencyInput
              onCurrencyClick={onCurrencyClick}
              openCurrency={openCurrency}
              setOpenCurrency={setOpenCurrency}
            />
          </div>
          {/* {!!openCurrency && (
            <Modal
              openCurrency={openCurrency}
              setOpenCurrency={setOpenCurrency}
            >
              <CurrencySelector />
            </Modal>
          )} */}
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
        <div className="form-group">
            <SubmitButton value="Send" />
          </div>
        </form>
    </div>
  );
}

export { TrackForm };
