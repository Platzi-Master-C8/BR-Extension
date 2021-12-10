import React from "react";

import './styles/TrackForm.scss'

function TrackForm() {
  const [inputValue, setInputValue] = React.useState({});
  const [showTag, setShowTag] = React.useState({});

  const onChange = e => {
    setShowTag({
      ...showTag,
      [e.target.name]: true
    })
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    });
  }

  const onFocus = (e) => {
    setShowTag({
      ...showTag,
      [e.target.name]: true
    })
  };
  const onBlur = (e) => {
    const inputName = e.target.name;
    const bool = inputValue[inputName]!='' ? true : false;
    console.log(inputValue[inputName]);
    console.log(bool);
    console.log(showTag);
    setShowTag({
      ...showTag,
      [e.target.name]: bool
    })
  };
  
  return (
    <div>
      <form>
        <div className="form-group">
          {!!showTag.company && <label className="form-group__label" >Company</label>}
          <input
            className="form-control"
            type="text"
            name="company"
            placeholder="Company"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={inputValue.company || ''}
          />
        </div>

        <div className="form-group">
          {!!showTag.position && <label className="form-group__label" >Position</label>}
          <input
            className="form-control"
            type="text"
            name="position"
            placeholder="Position"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={inputValue.position || ''}
          />
        </div>

        <div className="form-group">
          {!!showTag.link && <label className="form-group__label" >Link</label>}
          <input
            className="form-control"
            type="text"
            name="link"
            placeholder="Link"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={inputValue.link || ''}
          />
        </div>

        <div className="form-group">
          {!!showTag.location && <label className="form-group__label" >Location</label>}
          <input
            className="form-control"
            type="text"
            name="location"
            placeholder="Location"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={inputValue.location || ''}
          />
        </div>

        <div className="form-group">
          {!!showTag.offeredSalary && <label className="form-group__label" >Offered Salary</label>}
          <input
            className="form-control"
            type="text"
            name="offeredSalary"
            placeholder="Salary"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={inputValue.offeredSalary || ''}
          />
        </div>

        <div className="form-group">
          {!!showTag.notes && <label className="form-group__label" >Notes</label>}
          <input
            className="form-control"
            type="text"
            name="notes"
            placeholder="Notes"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={inputValue.notes || ''}
          />
        </div>

      </form>
    </div>
  );
}

export { TrackForm };