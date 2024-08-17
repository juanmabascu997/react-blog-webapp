import PostDetail from '../components/PostDetails';
import { useParams } from'react-router-dom';

function PostPage() {
  const { id } = useParams();

  return (
    <div>
      <PostDetail id={id} />
    </div>
  );
}

export default PostPage;
