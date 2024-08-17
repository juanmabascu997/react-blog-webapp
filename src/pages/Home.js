import PostList from '../components/PostList';
import { useState, useEffect, Suspense } from 'react';
import { fetchLoginUser, fetchTags } from '../services/api';
import TagFilterButton from '../components/TagFilterButton';

function Home() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    fetchLoginUser();
    fetchTags()
      .then(response => setTags(response))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <TagFilterButton tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList selectedTag={selectedTag} />
      </Suspense>
    </div>
  );
}

export default Home;
