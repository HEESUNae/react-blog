import React, { useEffect, useState } from 'react';
import { axiosApi } from '../../api/response';

interface PostListType {
  _id: string;
  title: string;
  content: string;
}

const PostList = () => {
  const [postList, setPostList] = useState<PostListType[]>([]);
  const postListData = async () => {
    try {
      const { data } = await axiosApi.get('/post/list');
      setPostList(data);
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
        </div>
      ))}
    </div>
  );
};

export default PostList;
