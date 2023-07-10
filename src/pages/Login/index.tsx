import React from 'react';
import { axiosApi } from '../../api/response';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const data = await axiosApi.post('/user/login', {
        id: 'qwer',
        pw: '1234',
      });
      if (data.status === 200) {
        // console.log(data);
        navigate('/postList');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <p>로그인</p>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button onClick={onSubmit}>로그인하기</button>
    </div>
  );
};

export default Login;
