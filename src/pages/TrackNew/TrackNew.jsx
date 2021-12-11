import React from 'react'

import './TrackNew.scss'

function TrackNew(props) {
  return (
    <div className="TrackForm__container">
      {props.children}
    </div>
  );
};

export { TrackNew };
