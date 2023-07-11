import React, { useEffect, useState } from 'react';
import { axiosApi } from '../../api/response';
import Layout from '../../components/layout/Layout';

interface PostListType {
  _id: string;
  title: string;
  content: string;
  name: string;
}

const PostList = () => {
  const [postList, setPostList] = useState<PostListType[]>([]);

  // 리스트 글 렌더링
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

  // 새로고칠시
  useEffect(() => {
    postListData();
  }, []);

  return (
    <Layout>
      {postList.map((item) => (
        <div key={item._id}>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <p>{item?.name}</p>
        </div>
      ))}
      {/* <button onClick={logoutUser}>로그아웃</button> */}
    </Layout>
  );
};

export default PostList;
