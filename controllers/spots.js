const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Spot = require('../models/spot.js');


router.get('/', async (req, res) => {
    const spots = await Spot.find({ user_id: req.session.user._id})
    res.render('spots/index.ejs', { spots });
  });

  router.get('/new', async (req, res) => {
    const spots = await Spot.find({});
    res.render('spots/new.ejs', { spots })
  });

  router.post('/', async (req, res) => {
    const spot = new Spot(req.body);
    spot.user_id = req.session.user_id;
    await spot.save();
    res.redirect('/spots');
  });




module.exports = router;