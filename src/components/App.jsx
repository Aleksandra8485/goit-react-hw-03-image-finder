import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const API_KEY = '36335087-8fc82f57bcc883baed7c9a06e';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedImage]);

  const searchImages = async keyword => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${keyword}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
      setCurrentPage(1);
      setSearchKeyword(keyword);
    } catch (error) {
      console.error('Błąd podczas wyszukiwania obrazów:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchKeyword}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(prevImages => [...prevImages, ...response.data.hits]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Błąd podczas ładowania kolejnych obrazów:', error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (imageUrl, alt) => {
    setSelectedImage({ imageUrl, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <Searchbar searchImages={searchImages} />

      {loading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {images.length > 0 && !loading && (
        <Button onClick={loadMoreImages}>Załaduj więcej</Button>
      )}

      {selectedImage && (
        <Modal
          imageUrl={selectedImage.imageUrl}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
