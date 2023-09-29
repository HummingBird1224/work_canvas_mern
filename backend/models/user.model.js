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
      defaultValue: 'user'
    },
    company_id: {
      type: Sequelize.STRING
    },
    order: {
      type: Sequelize.INTEGER,
      defaultValue: 9999
    }
  },
    {
      timestamps: true
    });

  return userList;
};