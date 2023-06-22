import React, { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const openLightbox = () => {
    basicLightbox.create(`<img src="${imageUrl}" alt="${alt}" />`).show();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imageUrl} alt={alt} onClick={openLightbox} />
      </div>
    </div>
  );
};

export default Modal;

// import React, { useEffect } from 'react';

// const Modal = ({ imageUrl, alt, onClose }) => {
//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <div className="overlay" onClick={onClose}>
//       <div className="modal">
//         <img src={imageUrl} alt={alt} />
//       </div>
//     </div>
//   );
// };

// export default Modal;
