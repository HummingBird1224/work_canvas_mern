module.exports = (sequelize, Sequelize) => {
	const planList = sequelize.define("wc_plans", {
		conpany_id: {
			type: Sequelize.INTEGER,
		},
		business_type: {
			type: Sequelize.ENUM(['美容師', 'アイリスト', 'ネイリスト/エステ'])
		},
		person_type: {
			type: Sequelize.STRING,
		},
		price: {
			type: Sequelize.STRING,
		},
		tax_included: {
			type: Sequelize.ENUM(['0', '1']),
		},
		license: {
			type: Sequelize.STRING
		}
	},
	{
		timestamps: false
	});

	return planList;
};