import React, { useEffect, useState } from 'react';
import { axiosApi } from '../../api/response';
import { useNavigate } from 'react-router-dom';

interface PostListType {
  _id: string;
  title: string;
  content: string;
  name: string;
}

const PostList = () => {
  const [postList, setPostList] = useState<PostListType[]>([]);
  const navigate = useNavigate();

  const postListData = async () => {
    try {
      const { data } = await axiosApi.get('/post/list');
      if (data) {
        setPostList(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const logoutUser = async () => {
    try {
      const data = await axiosApi.get('/user/logout');
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    postListData();
  }, []);

  return (
    <div>
      {postList.map((item) => (
        <div key={item._id}>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <p>{item?.name}</p>
        </div>
      ))}
      <button onClick={logoutUser}>로그아웃</button>
    </div>
  );
};

export default PostList;
