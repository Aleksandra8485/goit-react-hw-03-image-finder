import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <div className={styles.imageGallery} onClick={onClick}>
      <img src={imageUrl} alt={alt} className={styles.image} />
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
