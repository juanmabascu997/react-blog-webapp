import { useEffect, useState } from "react";
import {
  fetchCommentsByPostId,
  fetchPostById,
  fetchUser,
} from "../services/api";
import "./PostDetails.css";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";

function PostDetail({ id }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [imgSrc, setImgSrc] = useState(post?.img || "");
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = `data:image/jpeg;base64,${post?.img}`;
    setImgSrc(img.src)
  }, [post?.img]);

  useEffect(() => {
    const fetchPostData = async () => {
      let postsLocal = JSON.parse(localStorage.getItem('posts'));
      let postResponse = {};

      if (postsLocal) {
        postResponse = postsLocal.find((post)=> post.id == id)
        
      } else {
        postResponse = await fetchPostById(id);
        let res = await getUserInfo(postResponse.userId);
        let img =
          `https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;
  
        postResponse = {
          ...postResponse,
          userInfo: res,
          img: img,
        };
      }

      const commentsResponse = await fetchCommentsByPostId(id);
      setPost(postResponse);
      setComments(commentsResponse.comments);
    };
    fetchPostData();
  }, [id]);

  const getUserInfo = async function (userId) {
    return await fetchUser(userId);
  };

  if (!post) return <Loading />;

  return (
    <div className="post-detail">
      <button className="back-to-home-button" onClick={() => navigate("/")}>
        <BiHome />
      </button>
      <img src={imgSrc} alt={post.title} />
      <h1>{post.title}</h1>
      <p className="byline">
        by {post.userInfo?.firstName} {post.userInfo?.lastName}
      </p>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {comments.length == 0 ? (
        <div key="no-commets" className="comment">
          <p>
            <strong>This post has no comments yet.</strong>
          </p>
        </div>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>
              <strong>{comment.user.fullName}:</strong> {comment.body}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default PostDetail;
