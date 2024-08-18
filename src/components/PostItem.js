import { Link } from "react-router-dom";
import "./PostItem.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function PostItem({ classIndex, post }) {
  return (
    <div className={"post-item " + classIndex}>
      <img
        src={post.img}
        alt={post.title}
        style={{
          minHeight: "150px",
          minWidth: "200px",
          backgroundColor: "#f0f0f0",
        }}
      />

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
      <div className="post-footer">
        <div className="post-reactions">
          <span className="likes">
            <FaThumbsUp /> {post.reactions.likes}
          </span>
          <span className="dislikes">
            <FaThumbsDown /> {post.reactions.dislikes}
          </span>
        </div>
        <Link to={`/post/${post.id}`} className="read-more-link">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default PostItem;
