import React from 'react';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={imageUrl} alt={alt} className="image" />
    </div>
  );
};

export default ImageGalleryItem;

// import React from 'react';

// const ImageGalleryItem = ({ imageUrl, alt }) => {
//   return (
//     <li className="gallery-item">
//       <img src={imageUrl} alt={alt} />
//     </li>
//   );
// };

// export default ImageGalleryItem;
