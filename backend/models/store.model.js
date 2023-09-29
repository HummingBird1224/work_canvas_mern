module.exports = (sequelize, Sequelize) => {
  const storeList = sequelize.define("wc_stores", {
    company_id: {
      type: Sequelize.INTEGER
    },
    brand_type: {
      type: Sequelize.STRING,
    },
    store_name: {
      type: Sequelize.STRING,
    },
    store_address: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: true
  });

  return storeList;
};