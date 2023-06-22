import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          alt={image.alt}
          onClick={() => openModal(image.largeImageURL, image.alt)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
