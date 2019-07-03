const express = require('express');
const path = require('path');
const router = express.Router(); // 라우터 분리
console.log(path)
router.get('/', (req, res) => { // app 대신 router에 연결
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
  console.log(__dirname)
});
router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
router.get('/company1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'company1.html'));
});
module.exports = router; // 모듈로 만드는 부분