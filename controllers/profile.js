const express = require('express');
const router = express.Router();
const Spot = require('../models/spot.js');


router.get('/', async (req, res) => {
    try {
        const userSpots = await Spot.find({ user_id: req.session.user._id });
    
        res.render('profile/index.ejs', {
          spots: userSpots,
          username: req.session.user.username 
        });
      } catch (err) {
        console.log(err);
        res.redirect('/spots');
      }
    });
    
module.exports = router;