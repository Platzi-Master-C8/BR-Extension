import React from "react";

import './styles/TrackForm.scss'

function TrackForm() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label className="form-group__label" >Company</label>
          <input
            className="form-control"
            type="text"
            name="company"
            placeholder="Company"
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" >Position</label>
          <input
            className="form-control"
            type="text"
            name="position"
            placeholder="Position"
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" >Link</label>
          <input
            className="form-control"
            type="text"
            name="link"
            placeholder="Link"
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" >Location</label>
          <input
            className="form-control"
            type="text"
            name="location"
            placeholder="Location"
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" >Offered Salary</label>
          <input
            className="form-control"
            type="text"
            name="offeredSalary"
            placeholder="Salary"
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" >Notes</label>
          <input
            className="form-control"
            type="text"
            name="notes"
            placeholder="Notes"
          />
        </div>

      </form>
    </div>
  );
}

export { TrackForm };