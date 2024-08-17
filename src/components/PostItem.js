import { Link } from "react-router-dom";
import LazyLoadImage from "./LazyLoadImage";
import "./PostItem.css";

function PostItem({ classIndex, post }) {
  return (
    <div className={"post-item " + classIndex}>
      <LazyLoadImage src={post?.img} alt={post.title} />
      <h2>{post.title}</h2>
      <p>
        by {post.userInfo.firstName} {post.userInfo.lastName}
      </p>
      <div>
        {post.tags.map((tag, key) => (
          <span key={key} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <Link to={`/post/${post.id}`}>Read more</Link>
    </div>
  );
}

export default PostItem;
