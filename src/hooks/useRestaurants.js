import { useEffect, useState }from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setError('Something went wrong');
    }
  };

  // Call searchApi when is components
  // is first rendered
  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, restaurants, error];
};
