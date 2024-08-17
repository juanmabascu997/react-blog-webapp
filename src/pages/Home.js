import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    axios.get('https://dummyapi.io/data/v1/tag')
      .then(response => setTags(response.data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <p>Home</p>
    </div>
  );
}

export default Home;
