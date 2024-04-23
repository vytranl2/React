// Modal.js
import React from 'react';
import './Modal.css';

function Modal({ image, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>  // Close modal if background is clicked
      <div className="modal-content" onClick={e => e.stopPropagation()}>  // Prevent modal close when clicking inside the modal
        <img src={image} alt="Doodle Zoomed In" className="modal-image" />
        <button onClick={onClose} className="close-button">&times;</button>
      </div>
    </div>
  );
}

export default Modal;
