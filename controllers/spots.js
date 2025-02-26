const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Spot = require('../models/spot.js');


router.get('/', async (req, res) => {
    const spots = await Spot.find({})
    res.render('spots/index.ejs', { spots });
  });

  router.get('/new', async (req, res) => {
    const spots = await Spot.find({});
    res.render('spots/new.ejs', { spots })
  });

  router.post('/', async (req, res) => {
    const spot = new Spot(req.body);
    spot.user_id = req.session.user._id;
    spot.safe_for_jumping = req.body.safe_for_jumping === 'true';
    await spot.save();
    res.redirect('/spots');
  });

  router.get('/:id', async (req, res) => {
    const spot = await Spot.findById(req.params.id);
    const isOwner = spot.user_id.toString() === req.session.user._id.toString();
    res.render('spots/show.ejs', { spot, isOwner });
  });

  router.get('/:id/edit', async (req, res) => {
    const spot = await Spot.findById(req.params.id);
    res.render('spots/edit.ejs', { spot }) 
  });

  router.put('/:id', async (req, res) => {
    await Spot.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/spots/${req.params.id}`);
  });
  
  router.delete('/:id', async (req, res) => {
    await Spot.findByIdAndDelete(req.params.id);
    res.redirect('/spots');
  })
module.exports = router;