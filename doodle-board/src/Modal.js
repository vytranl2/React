import React from 'react';
import './Modal.css';

function Modal({ image, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <img src={image} alt="Doodle Zoom" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
