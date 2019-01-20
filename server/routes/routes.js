const express = require('express');
const bodyParser = require('body-parser');
const Shift = require('../models/shift');

const router = express.Router();
router.post('/shift', (req, res) => {
  console.log(req.body.date);

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
      return res.send(shift);
    }
  );

  // shift
  //   .save()
  //   .then(doc => res.send(doc))
  //   .catch(e => res.status(400).send(e));
});
module.exports = router;
