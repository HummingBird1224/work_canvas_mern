const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const userList = sequelize.define("wc_users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.ENUM(['admin', 'administrator', 'recruiter', 'user']),
      defaultValue: 'recruiter'
    },
    company_ids: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    order: {
      type: Sequelize.INTEGER,
      defaultValue: 9999
    },
    phone: {
      type: Sequelize.STRING,
    },
    mobile_phone: {
      type: Sequelize.STRING,
    },
    is_verified: {
      type: Sequelize.STRING,
      defaultValue: false
    },
    token: {
      type: Sequelize.STRING
    }
  },
    {
      timestamps: true
    });

  return userList;
};