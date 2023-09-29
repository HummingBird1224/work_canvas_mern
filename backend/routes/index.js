var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('../modules/ensureAuthenticated')
const paypal_config = require('../configs/paypal-config')
const paypal = require('paypal-rest-sdk')
const { User, Company, Feature, PayList, PaymentBank, PaymentCard, Plan, Store } = require("../models");

// Index Routing

// connect test
router.get('/welcome', function (req, res, next) {
  console.log('Welcome!');
  return res.json('Welcome to connect!');
});
// all user
router.get('/all_user', async function (req, res, next) {
  await User.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      return next(err);
    })
});

router.get('/', async function (req, res, next) {
  await User.findAll()
  .then(users => {
    var staff = users.length;
    res.status(200).json(staff); 
  })
  .catch(err => {
    return next(err);
  })
});



router.get('/', async function (req, res, next) {
  console.log('Home');

  var applicant = 0;
  var interview_scheduled = 0;
  var waiting_result = 0;
  const applicant_list = { applicant: applicant, interview_scheduled: interview_scheduled, waiting_result: waiting_result }

  var nearby_job_seeker = 0;
  var scouted = 0;
  var sold_off = 0;
  const scout_function = { nearby_job_seeker: nearby_job_seeker, scouted: scouted, sold_off: sold_off }

  var staff = get_staff();
  console.log(staff)


  return res.status(200).json({
    applicant_list: applicant_list,
    scout_function: scout_function,
    staff: staff,
  });


});


module.exports = router;
