import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

function Modal({ openCurrency, setOpenCurrency, children }) {
  const closeModal = () => {
    setOpenCurrency(false)
  }
  
  return ReactDOM.createPortal(
    <div className='modal__background' onClick={closeModal}>
      {children}
    </div>,
    document.getElementById('modal')
  );
};

export { Modal };