import axios from 'axios';

const getImages = async (query, page) => {
  const apiKey = '28421510-bfe8297e886d2caaf1b8bcf7e';
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
  });
  try {
    const response = await axios.get(`https://pixabay.com/api/?${params}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getImages;

