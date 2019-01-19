const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/hello', (req, res) => {
  res.json({ Hello: 'routes whooo ' });
});
module.exports = router;
