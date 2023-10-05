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
    company_id: {
      type: Sequelize.INTEGER
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
  },
    {
      timestamps: true
    });

  return userList;
};