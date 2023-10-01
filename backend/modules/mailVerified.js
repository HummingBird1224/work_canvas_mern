const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const config = require('../configs/mail-config');
const jwtConfig = require('../configs/jwt-config')
// import ApiError from '../error/ApiError';
// import { errorMessages } from '../models/errorMessages';
const { User } = require("../models");

const generateVerificationToken = (user) => {
  const payload = {
    user: {
      id: user.id,
    },
  };
  return jwt.sign(payload, jwtConfig.secret, { expiresIn: '1h' });
};

const generateWelcomeMail = (name, token) => `
  <p>${name}様</p>
  <p>WORKCANVASにお申し込みいただき誠にありがとうございます。<br>
  本メールは担当者様にご登録いただいたメールアドレスの認証のためお送りしております。</p>
  <p>下記の「認証を完了する」ボタンを押して認証を完了してください。</p>
  <div style="text-align:center; margin-top:30px; margin-bottom:30px">
    <a href="${process.env.CLIENT_URL}/verify-email/${token}"
    style="background:rgb(20, 31, 51), color:#fff", border-radius:4px; border:0; font-size:14px; text-decoration:none; padding:10px 45px">
    認証を完了する
    </a>
  </div>
  <p>認証後、本登録に進むことが可能となります。<br>
  引き続きWORKCANVASをよろしくお願いいたします。<br>
  ※こちらのメールに覚えがない場合、「support@gramn.com」にお問い合わせください。</p>
  `;

// module.exports = {
const emailVerificationService = {
  async sendVerificationEmail(userId) {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      // throw new ApiError(400, errorMessages.noUserId);
      throw 'err';
    }

    if (user.isVerified) {
      // throw new ApiError(400, 'User already verified');
      throw 'err';
    }

    const token = generateVerificationToken(user);
    const transport = nodemailer.createTransport({
      host: config.mailHost,
      port: config.mailPort,
      auth: {
        user: config.mailUser,
        pass: config.mailPassword,
      },
    });
    await transport.sendMail({
      from: config.mailFrom,
      to: 'faster1224@outlook.com',
      subject: 'Test',
      html: generateWelcomeMail(user.name, token),
    });

    return { confirmation: 'Verification email sent' };
  },

  async verifyEmail(req, res) {
    const token = req.params.token;
    console.log(token);
    try {
      const decoded = jwt.verify(token, jwtConfig.secret);
      const user = await User.findOne({ where: { id: decoded.user.id } });
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      await user.update({ is_verified: true });
      res.status(200).json({ msg: 'Email verified successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(400, errorMessages.noUserId);
    }

    if (user.isVerified) {
      throw new ApiError(400, 'User already verified');
    }

    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { isVerified: true } },
        { new: true },
      );

      const token = jwt.sign(
        {
          userId: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          isVerified: updatedUser.isVerified,
        },
        config.tokenSecret,
      );
      return { confirmation: 'Email address is verified', ...(isLoggedIn && { token }) };
    } catch (error) {
      throw new ApiError(400, 'Error while verifying user');
    }
  },

};

module.exports = emailVerificationService;