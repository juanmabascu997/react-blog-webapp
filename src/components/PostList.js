import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { fetchImg, fetchPosts, fetchUser } from "../services/api";
import "./PostList.css";
import Loading from "./Loading";
import NoPost from "./NoPost";

function PostList({ selectedTag }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    setLoadingPosts(true);
    const localPosts = localStorage.getItem('posts');
    if(JSON.parse(localPosts) && JSON.parse(localPosts).length > 0) {
      setPosts(JSON.parse(localPosts));
      filterPosts(JSON.parse(localPosts), selectedTag);
      setLoadingPosts(false);
    } else {
      fetchPosts()
        .then((response) => {
          getUsersInfo(response.posts);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    filterPosts(posts, selectedTag);
  }, [selectedTag]);

  const filterPosts = (posts, selectedTag) => {
    if (posts.length === 0 && selectedTag.length === 0) {
      let postsLocal = JSON.parse(localStorage.getItem('posts'));
      setFilteredPosts(postsLocal)
      return
    }

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
      let img = await getUserImg();      
      newPostsInfo.push({
        ...element,
        userInfo: res,
        img: img,
      });
    }
    setPosts(newPostsInfo);
    localStorage.setItem('posts',  JSON.stringify(newPostsInfo));
    filterPosts(newPostsInfo, selectedTag);
    setLoadingPosts(false);
  };

  const getUserImg = async function () {
    return await fetchImg();
  }
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
