module.exports = (sequelize, Sequelize) => {
  const cardList = sequelize.define("wc_payment_card", {
    conpany_id: {
			type: Sequelize.INTEGER,
		},
    card_number: {
			type: Sequelize.INTEGER,
		},
    security_code: {
			type: Sequelize.INTEGER,
		},
    expired_date: {
			type: Sequelize.STRING,
		},
    card_holder_name: {
			type: Sequelize.STRING,
		},
  },
  {
    timestamps: false
  });

  return cardList;
};