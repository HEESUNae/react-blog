import React, { useEffect, useState } from 'react';

// api
import { axiosApi } from '../../api/response';

// libraries
import { useLocation, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../../components/layout/Layout';

interface LoginFormType {
  id: string;
  pw: string;
}

const Login = () => {
  const navigation = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormType>();

  // 로그인
  const onSubmit: SubmitHandler<LoginFormType> = async (LoginData) => {
    try {
      const data = await axiosApi.post('/user/login', LoginData);
      if (data.status === 200) {
        navigation('/postList');
      }
    } catch (e) {
      alert('아이디 또는 비밀번호를 확인해주세요');
    }
  };

  return (
    <Layout>
      <p>로그인</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="아이디" {...register('id', { required: true })} />
        <input type="password" placeholder="비밀번호" {...register('pw', { required: true })} />
        <button>로그인하기</button>
      </form>
    </Layout>
  );
};

export default Login;
