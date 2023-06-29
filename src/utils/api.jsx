import axios from 'axios';

const API_KEY = '36335087-8fc82f57bcc883baed7c9a06e';

const fetchImages = async (keyword, page = 1) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${keyword}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default fetchImages;
