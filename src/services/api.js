import axios from 'axios';

const API_DUMMY_URL = 'https://dummyjson.com';
const API_PEXELS_URL = 'https://api.pexels.com/v1';
var REACT_APP_DUMMY_API_KEY = null;

axios.defaults.headers.common['app-id'] = REACT_APP_DUMMY_API_KEY;

export const fetchLoginUser = async () => {
  const res = await axios.post(`${API_DUMMY_URL}/user/login`, 
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
  const response = await axios.get(`${API_DUMMY_URL}/posts`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${REACT_APP_DUMMY_API_KEY}`
      }
    }
  );
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await axios.get(`${API_DUMMY_URL}/posts/${id}`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${REACT_APP_DUMMY_API_KEY}`
      }
    }
  );
  return response.data;
};

export const fetchCommentsByPostId = async (postId) => {
  const response = await axios.get(`${API_DUMMY_URL}/comments/post/${postId}`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${REACT_APP_DUMMY_API_KEY}`
      }
    }
  );
  return response.data;
};

export const fetchTags = async () => {
  const response = await axios.get(`${API_DUMMY_URL}/posts/tags`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${REACT_APP_DUMMY_API_KEY}`
      }
    }
  );
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${API_DUMMY_URL}/users`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${REACT_APP_DUMMY_API_KEY}`
      }
    }
  );
  return response.data;
};

export const fetchUser = async (userId) => {
  const response = await axios.get(`${API_DUMMY_URL}/users/${userId}`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${REACT_APP_DUMMY_API_KEY}`
      }
    }
  );
  return response.data;
};

export const fetchImg = async (imageId) => {
  const response = await axios.get(`${API_PEXELS_URL}/photos/2014422`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${process.env.REACT_APP_PEXEL_SECRET_API_KEY}`
      }
    }
  );
  return response.data;
};