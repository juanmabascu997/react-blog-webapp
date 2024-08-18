import axios from 'axios';

var REACT_APP_DUMMY_API_KEY = null;

axios.defaults.headers.common['app-id'] = REACT_APP_DUMMY_API_KEY;

export const fetchLoginUser = async () => {
  const res = await axios.post(`${process.env.REACT_APP_API_DUMMY_URL}/user/login`, 
    {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 60
    }, 
    {
      headers: { 
        'Content-Type': 'application/json' 
      }
    }
  );

  REACT_APP_DUMMY_API_KEY = res.data.token;

  return res.data;
};

export const fetchPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_DUMMY_URL}/posts`);
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_API_DUMMY_URL}/posts/${id}`);
  return response.data;
};

export const fetchCommentsByPostId = async (postId) => {
  const response = await axios.get(`${process.env.REACT_APP_API_DUMMY_URL}/comments/post/${postId}`);
  return response.data;
};

export const fetchTags = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_DUMMY_URL}/posts/tags`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_DUMMY_URL}/users`);
  return response.data;
};

export const fetchUser = async (userId) => {
  const response = await axios.get(`${process.env.REACT_APP_API_DUMMY_URL}/users/${userId}`);
  return response.data;
};

export const fetchImg = async () => {
  const response = await axios.get(`https://api.api-ninjas.com/v1/randomimage?category=nature`, 
    {
      headers: { 
        'X-Api-Key': `${process.env.REACT_APP_API_NINJAS_CLIENT_ID}`,
        'Accept': 'image/jpg'
      }
    }
  );
  
  return response.data;
};
