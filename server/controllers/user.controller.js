const userModal = require('../models/user.model');

//* CREATE
const createUser = async (req, res, next) => {
  try {
    const getUser = await userModal.findOne({ id: req.body.id });
    if (!getUser) {
      const createUser = await userModal.create(req.body);
      res.status(201).json(createUser);
    } else {
      res.status(404).json({ message: '아이디가 이미 존재합니다.' });
    }
  } catch (e) {
    next(e);
  }
};

//* LOGIN
const loginUser = async (req, res, next) => {
  try {
    // 회원찾기
    const getUser = await userModal.findOne({ id: req.body.id, pw: req.body.pw });
    if (getUser) {
      // db 세션 저장
      req.session.user = { id: getUser.id, name: getUser.name };
      res.status(200).json({ message: 'login succese' });
    } else {
      res.status(401).json({ message: '존재하지 않는 회원입니다.' });
    }
  } catch (e) {
    next(e);
  }
};

//* LOGOUT

module.exports = {
  createUser,
  loginUser,
};
