module.exports = (sequelize, Sequelize) => {
  const bankList = sequelize.define("wc_payment_bank", {
    conpany_id: {
			type: Sequelize.INTEGER,
		},
    bank_name: {
      type: Sequelize.STRING,
    },
    branch_name: {
      type: Sequelize.STRING,
    },
    deposit_type: {
			type: Sequelize.ENUM(['1', '2', '3'])
		},
    account_number: {
			type: Sequelize.STRING,
		},
    account_holder: {
			type: Sequelize.STRING,
		},
  },
  {
    timestamps: false
  });

  return bankList;
};