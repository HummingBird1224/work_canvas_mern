const express = require('express');
const axios = require('axios');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../configs/jwt-config')
const ensureAuthenticated = require('../modules/ensureAuthenticated')
var bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { Op } = require('sequelize');
const { User, Company, Billing, Feature, PayList, PaymentBank, PaymentCard, Plan, Store, FeatureList, GeneralFeature, HairdresserFeature, EyelistFeature, NailistFeature, sequelize } = require("../models");
const db = require("../models");
const TypedError = require('../modules/ErrorHandler')
const emailVerificationService = require('../modules/mailVerified');

// const User = db.User;
const clientUrl = 'https://work-canvas-mern.vercel.app/enterprise';
const mailUrl = 'https://metalpro.jp/api/v1/invite?email=';

const getMembers = async (companyId) => {
  return await User.findAll({
    attributes: ['id', 'username', 'role', 'order'],
    order: [['order', 'ASC']],
    where: sequelize.literal(`"wc_users"."company_ids"::jsonb @> '[${companyId}]'::jsonb`)
  });
}

const getAcceptedMembers = async (accepted) => {
  let members = [];
  if (accepted.length > 0) {
    for (let i = 0; i < accepted.length; i++) {
      const member = await User.findOne({
        attributes: ['id', 'username'],
        where: { id: accepted[i] }
      });
      members = [...members, member]
    }
  }
  return members;
}

const generateWelcomeMail = (name, token) => `
  <p>${name}様</p>
  <p>WORKCANVASにお申し込みいただき誠にありがとうございます。<br>
  本メールは担当者様にご登録いただいたメールアドレスの認証のためお送りしております。</p>
  <p>下記の「認証を完了する」ボタンを押して認証を完了してください。</p>
  <div style="text-align:center; margin-top:30px; margin-bottom:30px">
    <a href="${clientUrl}/verify-email/${token}" style="background:rgb(20, 31, 51); color:white; border-radius:4px; border:none; font-size:14px; text-decoration:none; padding:10px 45px">
    認証を完了する
    </a>
  </div>
  <p>認証後、本登録に進むことが可能となります。<br>
  引き続きWORKCANVASをよろしくお願いいたします。<br>
  ※こちらのメールに覚えがない場合、「support@gramn.com」にお問い合わせください。</p>
  `;

const sendVerificationEmail = async (user, token) => {
  const content = generateWelcomeMail(user.username, token);
  axios.get(mailUrl + user.email + '&content=' + content);
}

// router.get('/', async function (req, res, next) {
//   const cardInfo = [
//     {
//       title: '交通費・社会保険',
//       category: '0',
//       model_name: 'GeneralFeature'
//     },
//     {
//       title: '休暇の取得',
//       category: '0',
//       model_name: 'GeneralFeature'
//     },
//     {
//       title: '勤務スタイル・選考の補足',
//       category: '0',
//       model_name: 'GeneralFeature'
//     },
//     {
//       title: '制度・設備',
//       category: '0',
//       model_name: 'GeneralFeature'
//     },
//     {
//       title: '選考方法',
//       category: '0',
//       model_name: 'GeneralFeature'
//     },
//     {
//       title: '【美容師】採用の要件',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【美容師】業務委託スタイリストの待遇',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【美容師】正社員スタイリストの待遇',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【美容師】正社員アシスタントの待遇',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【美容師】メニュー及び専門業務について',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【美容師】その他の特徴',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【美容師】アルバイト',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【美容師】教育・勤務例',
//       category: '1',
//       model_name: 'HairdresserFeature'
//     },
//     {
//       title: '【アイリスト】採用の要件',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【アイリスト】正社員(経験者)の待遇',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【アイリスト】正社員(未経験者)の待遇',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【アイリスト】業務委託の待遇',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【アイリスト】アルバイト/パートの待遇',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【アイリスト】教育・勤務例',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【アイリスト】その他の特徴',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【アイリスト】メニュー及び専門業務',
//       category: '2',
//       model_name: 'EyelistFeature'
//     },
//     {
//       title: '【ネイリスト】採用の要件',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//     {
//       title: '【ネイリスト】正社員(経験者)の待遇',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//     {
//       title: '【ネイリスト】正社員(未経験者)の待遇',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//     {
//       title: '【ネイリスト】業務委託の待遇',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//     {
//       title: '【ネイリスト】アルバイト/パートの待遇',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//     {
//       title: '【ネイリスト】教育・勤務例',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//     {
//       title: '【ネイリスト】メニュー及び専門業務',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//     {
//       title: '【ネイリスト】その他の特徴',
//       category: '3',
//       model_name: 'NailistFeature'
//     },
//   ];

//   await FeatureList.bulkCreate(cardInfo);
//   console.log('done');
// })

//POST /signup
router.post('/users/register', async function (req, res, next) {
  // console.log('---------------------- test1 -----------------\n', req.body);
  let _user = req.body;

  req.checkBody('corporate_name', 'Corporate is required').notEmpty();
  req.checkBody('username', 'User Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('phone', 'Phone number is required').notEmpty();

  let missingFieldErrors = req.validationErrors();
  if (missingFieldErrors) {
    let err = new TypedError('register error', 400, 'missing_field', {
      errors: missingFieldErrors,
    })
    throw err;
    return next(err)
  }

  req.checkBody('email', 'Email is not valid').isEmail();
  let invalidFieldErrors = req.validationErrors()
  if (invalidFieldErrors) {
    let err = new TypedError('register error', 403, 'invalid_field', {
      errors: invalidFieldErrors,
    })
    throw err;
    return next(err)
  }

  const inviteId = crypto.randomBytes(8).toString('hex');
  const company_data = {
    corporate_name: _user.corporate_name,
    invite_id: inviteId
  }

  let company_id;
  await Company.findOne({ where: { 'corporate_name': company_data.corporate_name } })
    .then(company => {
      if (company) {
        let err = new TypedError('register error', 400, 'invalid_field', {
          message: "企業名がすでに存在します。"
        })
        return next(err);
      }
      else {
        Company.create(company_data)
          .then(company => {
            company_id = company.id
          })
          .catch(err => {
            throw err;
            return next(err);
          })
      }
    })
  await User.findOne({ where: { email: _user.email } })
    .then((user) => {
      if (user) {
        let err = new TypedError('register error', 400, 'invalid_field', {
          message: "メールアドレスが既に存在します。"
        })
        return next(err);
      }
      else {
        bcrypt.genSalt(10, async function (err, salt) {
          await bcrypt.hash(_user.password, salt, function (err, hash) {
            _user.password = hash;
            let token = jwt.sign(
              { email: _user.email },
              config.secret,
              // { expiresIn: '1h' }
            )
            // User.create({ ..._user, _token: token, company_id: company_id })
            User.create({ ..._user, company_ids: [company_id], role: 'administrator', token: token })
              .then(async (user) => {

                await sendVerificationEmail(user, token);
                return res.json({
                  email: user.email
                });
              })
              .catch(err => {
                console.error(err);
                throw err;
                return next(err);
              })
          });
        });
      }
    })
    .catch(err => {
      throw err;
      return next(err);
    })
});

router.post('/initialData', ensureAuthenticated, async function (req, res, next) {
  const { companyData, billingData, bankData, companyId, userId } = req.body;
  const company = await Company.findOne({ where: { id: companyId } });
  await company.update({ ...companyData, applied_date: new Date() });
  const billing = await Billing.create({ ...billingData, company_id: companyId });
  const bank = await PaymentBank.create({ ...bankData, company_id: companyId });
  const user = await User.findOne({ where: { id: userId } });
  if (company && billing && bank) {
    return res.status(200).json({
      user_id: user.id,
      username: user.username,
      token: user.token,
      role: user.role,
      company_id: user.company_ids[0],
      email: user.email,
      corporate_name: company.corporate_name
    });
  }
})

//POST /signin
router.post('/users/login', async function (req, res, next) {
  const { email, password } = req.body || {};
  if (!email || !password) {
    let err = new TypedError('login error', 400, 'missing_field', { message: "メールアドレス、またはパスワードはありません。" })
    return next(err)
  }
  // console.log(User);
  await User.findOne({
    where: { email: email }
  })
    .then(user => {
      if (!user) {
        let err = new TypedError('login error', 400, 'invalid_field', { message: "メールアドレス、またはパスワードが違います。" })
        return next(err)
      }
      bcrypt.compare(password, user.password, async function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          let token = jwt.sign(
            { email: email },
            config.secret,
            // { expiresIn: '1h' }
          )
          // await user.update({ token: token });
          if (user.role == 'administrator') {
            const { corporate_name } = await Company.findOne({
              attributes: ['corporate_name'],
              where: { id: user.company_ids[0] }
            });
            res.status(200).json({
              user_id: user.id,
              username: user.username,
              token: token,
              role: user.role,
              company_id: user.company_ids[0],
              email: user.email,
              corporate_name: corporate_name
            })
          }
          else if (user.role == 'recruiter') {
            let corporates = [];
            for (let i = 0; i < user.company_ids.length; i++) {
              const { corporate_name } = await Company.findOne({
                attributes: ['corporate_name'],
                where: { id: user.company_ids[i] }
              });
              // console.log(corporate_name)
              corporates = [...corporates, { company_id: user.company_ids[i], corporate_name: corporate_name }];
            }
            res.status(200).json({
              user_id: user.id,
              username: user.username,
              token: token,
              role: user.role,
              email: user.email,
              corporates: corporates
            })
          }
          else {
            let err = new TypedError('login error', 400, 'invalid_user', { message: "登録された企業がいないか招待されていないユーザー。" })
            return next(err)
          }
          // const corporate_name = await Company.findOne({where:})
        }
        else {
          let err = new TypedError('login error', 400, 'password_not_match', { message: "パスワードが正しくありません。" })
          return next(err)
        }
      });
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/mainData/:companyId', ensureAuthenticated, async function (req, res, next) {
  const companyId = req.params.companyId;
  try {
    const stores = await Store.count({ where: { company_id: companyId } })
    const users = await User.count({
      where: sequelize.literal(`"wc_users"."company_ids"::jsonb @> '[${companyId}]'::jsonb`)
    })
    res.status(200).json({
      members: users,
      stores: stores
    })
  }
  catch (err) {
    throw err;
    return next(err);
  }
})

router.get('/company/:companyId', ensureAuthenticated, async function (req, res, next) {
  const companyId = req.params.companyId;
  await Company.findOne({ where: { id: companyId } })
    .then(async (company) => {
      res.status(200).json(company);
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/billing/:companyId', ensureAuthenticated, async function (req, res, next) {
  const companyId = req.params.companyId;
  await Billing.findOne({ where: { company_id: companyId } })
    .then(async (billing) => {
      res.status(200).json(billing);
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/bank/:companyId', ensureAuthenticated, async function (req, res, next) {
  const companyId = req.params.companyId;
  await PaymentBank.findOne({ where: { company_id: companyId } })
    .then(async (bank) => {
      res.status(200).json(bank);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/company/edit', ensureAuthenticated, async function (req, res, next) {
  const companyData = req.body;
  const company = await Company.findOne({ where: { id: companyData.id } });
  company.update(companyData)
    .then(async (company) => {
      return res.status(200).json(company);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/billing/edit', ensureAuthenticated, async function (req, res, next) {
  const billingData = req.body;
  const billing = await Billing.findOne({ where: { id: billingData.id } });
  billing.update(billingData)
    .then(async (billing) => {
      return res.status(200).json(billing);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/bank/edit', ensureAuthenticated, async function (req, res, next) {
  const bankData = req.body;
  const bank = await PaymentBank.findOne({ where: { id: bankData.id } });
  bank.update(bankData)
    .then(async (bank) => {
      return res.status(200).json(bank);
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/company/:companyId/members', ensureAuthenticated, async function (req, res, next) {
  const companyId = req.params.companyId;
  await getMembers(companyId)
    .then(async (members) => {
      res.status(200).json(members);
    })
    .catch(err => {
      // return next(err);
      throw err;
    })
})

router.get('/company/:companyId/acceptedMembers', ensureAuthenticated, async function (req, res, next) {
  const companyId = req.params.companyId;
  const company = await Company.findOne({
    where: { id: companyId }
  });
  const accepted = company.accepted;
  const members = await getAcceptedMembers(accepted);
  res.status(200).json(members);
})

router.get('/company/:companyId/accept/:status/:userId', ensureAuthenticated, async function (req, res, next) {
  const { companyId, userId, status } = req.params;
  const company = await Company.findOne({
    where: { id: companyId }
  });
  let newAccpeted = [...company.accepted];
  const index = newAccpeted.indexOf(parseInt(userId));
  newAccpeted.splice(index, 1);
  await company.update({
    accepted: [...newAccpeted]
  })
  const user = await User.findOne({
    where: { id: userId }
  })
  if (status) {
    await user.update({
      role: 'user' ? 'recruiter' : user.role,
      company_ids: [...user.company_ids, parseInt(companyId)]
    })
  }
  const members = await getAcceptedMembers(company.accepted)
  res.status(200).json(members);
})

router.get('/company/:companyId/inviteId', ensureAuthenticated, async function (req, res, next) {
  const companyId = req.params.companyId;
  await Company.findOne({
    attributes: ['invite_id'],
    where: { id: companyId }
  }).then(company => {
    return res.status(200).json(company);
  })
    .catch(err => {
      return next(err);
    })
})

router.post('/members/:userId/roleChange', ensureAuthenticated, async function (req, res, next) {
  const { userId } = req.params;
  const { role, companyId } = req.body;
  await User.update(
    {
      role: role
    },
    { where: { id: userId } }
  );
  await getMembers(companyId)
    .then(async (members) => {
      res.status(200).json(members);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/members/orderChange', ensureAuthenticated, async function (req, res, next) {
  const { members } = req.body;
  let newMembers = [];
  for (let i = 0; i < members.length; i++) {
    try {
      const newMember = await User.findOne(
        { where: { id: members[i].id } }
      );
      newMember.update({ order: members[i].order });
      newMembers = [...newMembers, {
        id: newMember.id,
        order: newMember.order,
        role: newMember.role,
        username: newMember.username
      }]
    }
    catch (err) {
      // throw err;
      return next(err);
    }
  }
  return res.status(200).json(newMembers);
})

router.get('/members/:memberId/delete/:companyId', ensureAuthenticated, async function (req, res, next) {
  const { memberId, companyId } = req.params;
  const user = await User.findOne({ where: { id: memberId } });
  let newArray = [...user.company_ids];
  const index = newArray.indexOf(parseInt(companyId));
  newArray.splice(index, 1)
  await user.update({
    company_ids: [...newArray]
  })
  await getMembers(companyId)
    .then(async (members) => {
      res.status(200).json(members);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/plans', ensureAuthenticated, async function (req, res, next) {
  const planIds = req.body;
  await Plan.findAll({
    attributes: ['id', 'business_type', 'total_plan'],
    where: { id: { [Op.in]: planIds } }
  })
    .then(async (plans) => {
      res.status(200).json(plans)
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/plans', ensureAuthenticated, async function (req, res, next) {
  await Plan.findAll()
    .then(async (plans) => {
      res.status(200).json(plans);
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/plans/applied/:companyId', ensureAuthenticated, async function (req, res, next) {
  const { companyId } = req.params;
  try {
    const company = await Company.findOne({
      attributes: ['business_types', 'applied_date'],
      where: { id: companyId }
    });
    await Plan.findAll({
      attributes: ['id', 'business_type', 'total_plan'],
      where: { id: { [Op.in]: company.business_types } }
    }).then(async (plans) => {
      return res.status(200).json({ plans: plans, appliedDate: company.applied_date })
    }).catch(err => {
      throw err;
      return next(err);
    });
  }
  catch (err) {
    throw err;
  }
})

router.post('/plans/change/:companyId', ensureAuthenticated, async function (req, res, next) {
  const appliedPlanIds = req.body;
  const { companyId } = req.params;
  try {
    const company = await Company.findOne({
      where: { id: companyId }
    });
    const newArray = company.business_types.concat(appliedPlanIds)
    await company.update({ business_types: newArray });
    return res.status(200).json(company);
  }
  catch (err) {
    throw err;
  }
})

router.get('/mail/check/:inviteId', async function (req, res, next) {
  const { inviteId } = req.params;
  await Company.findOne({ where: { invite_id: inviteId } })
    .then(company => {
      if (company) {
        return res.status(200).json(company.id)
      }
      else {
        let err = new TypedError('invited error', 400, 'invalid_field', {
          message: "会社は存在しません。"
        })
        return next(err);
      }
    })
    .catch(err => {
      throw err;
    })
})

router.post('/mail/send', ensureAuthenticated, async function (req, res, next) {
  const { mail, content } = req.body;
  axios.get(mailUrl + mail + '&content=' + content);
  res.status(200).json(true);
})

router.post('/mail/verify', async function (req, res, next) {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, config.secret);
    const email = decoded.email;
    const user = await User.findOne({ where: { email: email } });
    if (user && user.is_verified == 'false') {
      await user.update({ is_verified: true });
      res.status(200).json({
        user_id: user.id,
        company_id: user.company_ids[0],
        token: user.token
      });
    }
    else {
      let err = new TypedError('verify error', 400, 'invalid_user', {
        message: "ユーザーが存在しません。"
      })
      return next(err);
    }
  }
  catch (err) {
    throw err;
  }
})

router.post('/mail/resend', async function (req, res, next) {
  const { email } = req.body;
  const user = await User.findOne({ where: { email: email } });
  await sendVerificationEmail(user, user.token);
  res.status(200).json(true);
})

router.post('/invite/accept', async function (req, res, next) {
  const { email, companyId } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    const company = await Company.findOne({ where: { id: companyId } });
    await company.update({
      accepted: [...company.accepted, user.id]
    });
    res.status(200).json(company);
  }
  catch (err) {
    throw err;
  }
})

router.post('/invite/register', async function (req, res, next) {
  // console.log('---------------------- test1 -----------------\n', req.body);
  const { userData, companyId } = req.body;

  req.checkBody('userData.username', 'User Name is required').notEmpty();
  req.checkBody('userData.email', 'Email is required').notEmpty();
  req.checkBody('userData.password', 'Password is required').notEmpty();

  let missingFieldErrors = req.validationErrors();
  if (missingFieldErrors) {
    let err = new TypedError('register error', 400, 'missing_field', {
      errors: missingFieldErrors,
    })
    throw err;
    return next(err)
  }

  req.checkBody('userData.email', 'Email is not valid').isEmail();
  let invalidFieldErrors = req.validationErrors()
  if (invalidFieldErrors) {
    let err = new TypedError('register error', 403, 'invalid_field', {
      errors: invalidFieldErrors,
    })
    throw err;
    return next(err)
  }

  await Company.findOne({
    where: { id: companyId }
  })
    .then(async (company) => {
      if (company) {
        await User.findOne({ where: { email: userData.email } })
          .then((user) => {
            if (user) {
              let err = new TypedError('register error', 400, 'invalid_field', {
                message: "メールアドレスが既に存在します。"
              })
              return next(err);
            }
            else {
              bcrypt.genSalt(10, async function (err, salt) {
                await bcrypt.hash(userData.password, salt, function (err, hash) {
                  userData.password = hash;
                  let token = jwt.sign(
                    { email: userData.email },
                    config.secret,
                    // { expiresIn: '1h' }
                  )
                  // User.create({ ..._user, _token: token, company_id: company_id })
                  User.create({ ...userData, role: 'user' })
                    .then(async (user) => {
                      // await emailVerificationService.sendVerificationEmail(user.id);
                      return res.json({
                        email: user.email,
                        company_id: companyId
                      });
                    })
                    .catch(err => {
                      console.error(err);
                      throw err;
                      return next(err);
                    })
                });
              });
            }
          })
          .catch(err => {
            throw err;
            return next(err);
          })
      }
      else {
        let err = new TypedError('register error', 400, 'invalid_field', {
          message: "企業が見つかりません。"
        })
        return next(err);
      }
    })
    .catch(err => {
      throw err;
      return next(err);
    })
});

router.post('/invite/login', async function (req, res, next) {
  const { userData, companyId } = req.body || {};
  if (!userData.email || !userData.password) {
    let err = new TypedError('login error', 400, 'missing_field', { message: "メールアドレス、またはパスワードはありません。" })
    return next(err)
  }
  // console.log(User);
  await User.findOne({
    where: { email: userData.email }
  })
    .then(user => {
      if (!user) {
        let err = new TypedError('login error', 400, 'invalid_field', { message: "メールアドレス、またはパスワードが違います。" })
        return next(err)
      }
      bcrypt.compare(userData.password, user.password, async function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          let token = jwt.sign(
            { email: userData.email },
            config.secret,
            // { expiresIn: '1h' }
          )
          res.status(200).json({
            email: user.email,
            company_id: companyId
          })
        }
        else {
          let err = new TypedError('login error', 400, 'password_not_match', { message: "パスワードが正しくありません。" })
          return next(err)
        }
      });
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/features/list/:companyId', ensureAuthenticated, async function (req, res, next) {
  try {
    const { companyId } = req.params;
    const company = await Company.findOne({
      attributes: ['business_types'],
      order: [['id', 'ASC']],
      where: { id: companyId }
    });
    await FeatureList.findAll({
      attributes: ['id', 'title', 'status', 'category'],
      where: { category: { [Op.in]: [...company.business_types, '0'] } }
    })
      .then(async (featureList) => {
        res.status(200).json(featureList);
      })
      .catch(err => {
        throw err;
        return next(err);
      })
  }
  catch (err) {
    throw err;
  }
})

router.get('/features/:featureId/:companyId', ensureAuthenticated, async function (req, res, next) {
  try {
    const { companyId, featureId } = req.params;
    const featureList = await FeatureList.findOne({
      attributes: ['category', 'model_name'],
      where: { id: featureId }
    });
    const model = db[featureList.model_name];
    const modelData = await model.findOne({ where: { company_id: companyId } });
    res.status(200).json(modelData);
  }
  catch (err) {
    throw err;
  }
})

router.post('/features/:featureId/:companyId', async function (req, res, next) {
  const { featureId, companyId } = req.params;
  const data = req.body;
  try {
    const feature = await FeatureList.findOne({ where: { id: featureId } });
    const status = feature.status;
    const model = db[feature.model_name];
    const modelData = await model.findOne({ where: { company_id: companyId } });
    if (!modelData) {
      await model.create({ ...data, company_id: companyId });
    }
    else {
      await modelData.update(data);
    }
    await feature.update({ status: '1' });
    res.status(200).json(status);
  }
  catch (err) {
    throw err;
  }
})



//GET /

router.get('/:userId', ensureAuthenticated, async function (req, res, next) {
  const userId = req.params.userId;
  await User.findOne({ where: { id: userId } })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/:userId/edit', ensureAuthenticated, async function (req, res, next) {
  req.checkBody('first_name', '姓は必須です。').notEmpty();
  req.checkBody('last_name', '名は必須です。').notEmpty();
  req.checkBody('kana_first', '姓（カナ）は必須です。').notEmpty();
  req.checkBody('last_name', '名（カナ）は必須です。').notEmpty();
  req.checkBody('post_code', '郵便番号は必須です。').notEmpty();
  req.checkBody('state', '都道府県は必須です。').notEmpty();
  req.checkBody('address', '住所は必須です。').notEmpty();
  req.checkBody('phone_number', '電話番号は必須です。').notEmpty();
  let missingFieldErrors = req.validationErrors();
  if (missingFieldErrors) {
    let err = new TypedError('register error', 400, 'missing_field', {
      errors: missingFieldErrors,
    })
    return next(err)
  }
  const userId = req.params.userId;
  await User.findOne({ where: { id: userId } })
    .then(async (user) => {
      if (!user) {
        let err = new TypedError('login error', 403, 'invalid_field', { message: "間違ったIDです。" })
        return next(err)
      }
      else {
        await user.update(req.body);
        res.status(201).json(user);
      }
    })
    .catch(err => {
      return next(err);
    })
})

//Delete user
router.get('/:userId/delete', ensureAuthenticated, async function (req, res, next) {
  let userId = req.params.userId;
  await User.destroy({
    where: {
      id: userId
    }
  })
    .then(async (user) => {
      await User.findAll({ where: { role: { [Op.ne]: 'admin' } } })
        .then(users => {
          res.status(201).json(users);
        })
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/:userId/addresses', ensureAuthenticated, async function (req, res, next) {
  let userId = req.params.userId;
  await Address.findAll({
    where: {
      user_id: userId
    }
  })
    .then(async (addresses) => {
      res.status(201).json(addresses);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/:userId/address/add', ensureAuthenticated, async function (req, res, next) {
  let userId = req.params.userId;
  const address = req.body;
  await Address.create({
    ...address, user_id: userId
  })
    .then(async (address) => {
      res.status(201).json(address);
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/addresses/:id', ensureAuthenticated, async function (req, res, next) {
  let id = req.params.id;
  await Address.findOne({
    where: {
      id: id
    }
  })
    .then(async (address) => {
      res.status(201).json(address);
    })
    .catch(err => {
      return next(err);
    })
})

router.post('/addresses/:id/edit', ensureAuthenticated, async function (req, res, next) {
  let id = req.params.id;
  await Address.findOne({
    where: {
      id: id
    }
  })
    .then(async (address) => {
      await address.update(req.body);
      res.status(201).json(address);
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/:userId/addresses/:id/set/:historyId', ensureAuthenticated, async function (req, res, next) {
  let { userId, id, historyId } = req.params;
  await Address.update(
    {
      checked: sequelize.literal(`CASE WHEN id = ${id} THEN true ELSE false END`)
    },
    { where: { user_id: userId } }
  )
  await Address.findOne({ where: { id: id } })
    .then(async (address) => {
      await GachaUser.findOne({ where: { id: historyId } })
        .then(async (history) => {
          await history.update({ address_id: address.id })
        })
        .catch(err => {
          return next(err);
        })
      res.status(201).json(address);
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/:userId/addresses/:id/delete', ensureAuthenticated, async function (req, res, next) {
  let { userId, id } = req.params;
  await Address.destroy({
    where: {
      id: id
    }
  })
    .then(async (address) => {
      await Address.findAll({ where: { user_id: userId } })
        .then(addresses => {
          res.status(201).json(addresses);
        })
    })
    .catch(err => {
      return next(err);
    })
})

router.get('/:userId/point/:amount/charge', ensureAuthenticated, async function (req, res, next) {
  let { userId, amount } = req.params;
  await User.findOne({
    where: {
      id: userId
    }
  })
    .then(async (user) => {
      await user.update(
        {
          point: parseInt(user.point) + parseInt(amount),
          deposit: parseInt(user.deposit) + parseInt(amount)
        })
        .then(user => {
          res.status(201).json(user.point);
        })
        .catch(err => {
          throw err;
          return next(err);
        })
    })
    .catch(err => {
      throw err;
      return next(err);
    })
})

module.exports = router;