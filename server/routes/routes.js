const express = require('express');
const bodyParser = require('body-parser');
const Shift = require('../models/shift');

const router = express.Router();
router.post('/shift', (req, res) => {
  console.log(req.body);

  const shift = new Shift({
    date: req.body.date,
    shift: req.body.shift
  });
  shift
    .save()
    .then(doc => res.send(doc))
    .catch(e => res.status(400).send(e));
});
module.exports = router;
