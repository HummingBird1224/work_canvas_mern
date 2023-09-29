module.exports = (sequelize, Sequelize) => {
  const payList = sequelize.define("wc_pay_list", {
    conpany_id: {
			type: Sequelize.INTEGER,
		},
    pay_type: {
      type: Sequelize.ENUM(['billing', 'payment'])
    },
    amount: {
      type: Sequelize.FLOAT,
    },
    from_to_name: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: false
  });

  return payList;
};