const express = require('express');
const bodyParser = require('body-parser');
const Shift = require('../models/shift');

const router = express.Router();
router.post('/shift', (req, res) => {
  const shift = {
    date: req.body.date,
    shift: req.body.shift
  };

  Shift.findOneAndUpdate(
    {
      date: req.body.date
    },
    shift,
    {
      upsert: true,
      new: true,
      overwrite: true
    },
    (err, doc) => {
      // Handle any possible database errors
      if (err) return res.status(500).send(err);
    }
  );
});

router.get('/shift', (req, res, next) => {
  Shift.find((err, shifts) => {
    if (err) {
      res.send(err);
    }
    res.json(shifts);
  });
});

module.exports = router;
