import React, { useEffect, useState } from 'react';

// style
import { StyledHeader } from './style';

// api
import { axiosApi } from '../../../api/response';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // 로그아웃
  const logoutUser = async () => {
    try {
      const data = await axiosApi.get('/');
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledHeader>
      <header>
        <div className="logo">
          <a href="/">블로그</a>
        </div>
        {<button onClick={logoutUser}>로그아웃</button>}
      </header>
    </StyledHeader>
  );
};

export default Header;
