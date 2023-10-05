const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const companyList = sequelize.define("wc_company", {
    corporate_name: {
      type: Sequelize.STRING
    },
    company_name: {
      type: Sequelize.STRING
    },
    founder: {
      type: Sequelize.STRING,
    },
    foundation_date: {
      type: Sequelize.STRING,
    },
    prefecture_id: {
      type: Sequelize.INTEGER,
    },
    address_main: {
      type: Sequelize.STRING,
    },
    address_detail: {
      type: Sequelize.STRING,
    },
    facebook: {
      type: Sequelize.STRING,
    },
    twitter: {
      type: Sequelize.STRING,
    },
    instagram: {
      type: Sequelize.STRING,
    },
    homepage: {
      type: Sequelize.STRING,
    },
    invite_id: {
      type: Sequelize.STRING,
    },
    representative_director_name: {
      type: Sequelize.STRING,
    },
    phone_number: {
      type: Sequelize.STRING,
    },
    postal_code: {
      type: Sequelize.STRING,
    },
    business_types: {
      type: DataTypes.JSON,
    }
  },
    {
      timestamps: true,
    });

  return companyList;
};