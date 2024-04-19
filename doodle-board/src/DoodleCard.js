import React, { useState } from 'react';
import Modal from './Modal';
import './DoodleCard.css';

function DoodleCard({ title, image }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="doodle-card" onClick={toggleModal}>
      <img src={image} alt={title} className="doodle-image" />
      <div className="title">{title}</div>
      {modalOpen && <Modal image={image} onClose={toggleModal} />}
    </div>
  );
}

export default DoodleCard;
