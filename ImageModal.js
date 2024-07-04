import React from 'react';
import './ImageModal.css';

const ImageModal = ({ src, onClose, onPrev, onNext }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={src} alt="Modal item" />
        <div className="navigation">
          <button onClick={onPrev}>Previous</button>
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;