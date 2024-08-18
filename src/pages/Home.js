import PostList from '../components/PostList';
import { useState, useEffect, Suspense } from 'react';
import { fetchLoginUser, fetchTags } from '../services/api';
import TagFilterButton from '../components/TagFilterButton';
import TagClearButton from '../components/TagClearButton';

function Home() {
  const [tags, setTags] = useState([]);
  const [clear, setClearTagsButton] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    fetchLoginUser();
    fetchTags()
      .then(response => setTags(response))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if(selectedTag) {
      setClearTagsButton(true)
    } else {
      setClearTagsButton(false)
    }
  }, [selectedTag]);

  return (
    <div>
      {
        clear ? <TagClearButton onSelectTag={setSelectedTag} /> : <></>
      }
      <TagFilterButton tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList selectedTag={selectedTag} />
      </Suspense>
    </div>
  );
}

export default Home;
