import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { fetchPosts, fetchUser } from "../services/api";
import "./PostList.css";
import Loading from "./Loading";
import NoPost from "./NoPost";

function PostList({ selectedTag }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    setLoadingPosts(true);
    fetchPosts()
      .then((response) => {
        getUsersInfo(response.posts);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    filterPosts(posts, selectedTag);
  }, [selectedTag]);

  const filterPosts = (posts, selectedTag) => {
    if (selectedTag.length === 0) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.tags.some((tag) => selectedTag.includes(tag))
      );
      setFilteredPosts(filtered);
    }
  };

  const getUsersInfo = async function (responsePosts) {
    let newPostsInfo = [];

    for (let index = 0; index < responsePosts.length; index++) {
      const element = responsePosts[index];
      let res = await getUserInfo(element.userId);
      let img =
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";
      newPostsInfo.push({
        ...element,
        userInfo: res,
        img: img,
      });
    }
    setPosts(newPostsInfo);
    filterPosts(newPostsInfo, selectedTag);
    setLoadingPosts(false);
  };

  const getUserInfo = async function (userId) {
    return await fetchUser(userId);
  };

  return (
    <>
      {loadingPosts ? (
        <Loading />
      ) : filteredPosts.length == 0 ? (
        <NoPost />
      ) : (
        <div className="parent">
          {filteredPosts ? (
            filteredPosts.map((post, index) => (
              <PostItem
                key={post.id}
                classIndex={`div${index + 1}`}
                post={post}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      )}
    </>
  );
}

export default PostList;
