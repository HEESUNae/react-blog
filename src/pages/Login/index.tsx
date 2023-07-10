import React, { useEffect, useState } from 'react';

// api
import { axiosApi } from '../../api/response';

// libraries
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginFormType {
  id: string;
  pw: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = async (LoginData) => {
    try {
      const data = await axiosApi.post('/user/login', LoginData);
      if (data.status === 200) {
        navigate('/postList');
      } else {
      }
    } catch (e) {
      alert('아이디 또는 비밀번호를 확인해주세요');
    }
  };

  const logoutUser = async () => {
    try {
      const data = await axiosApi.get('/user/logout');
      // navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    logoutUser();
  }, []);

  return (
    <div>
      <p>로그인</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="아이디" {...register('id', { required: true })} />
        <input type="password" placeholder="비밀번호" {...register('pw', { required: true })} />
        <button>로그인하기</button>
      </form>
    </div>
  );
};

export default Login;
