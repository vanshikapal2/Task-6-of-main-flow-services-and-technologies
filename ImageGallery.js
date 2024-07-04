import React from 'react';
import ImageItem from './ImageItem';
import './ImageGallery.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem
          key={index}
          src={image}
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;