module.exports = (sequelize, Sequelize) => {
	const billingList = sequelize.define("wc_billings", {
		company_id: {
			type: Sequelize.INTEGER
		},
		billing_company_name: {
			type: Sequelize.STRING
		},
		postal_code: {
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
	},
		{
			timestamps: false
		});

	return billingList;
};