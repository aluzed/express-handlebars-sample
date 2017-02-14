const express = require('express');
var router = express.Router();

router.route('/')
  .get((req, res)=>{
    res.render(`pages/home`, { _page: {
      title: 'homepage'
    } });
  });

module.exports = router;
