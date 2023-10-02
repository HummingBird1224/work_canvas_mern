const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
	const planList = sequelize.define("wc_plans", {
		business_type: {
			type: Sequelize.ENUM(['美容師', 'アイリスト', 'ネイリスト', 'エステティシャン'])
		},
		plan1: {
			type: DataTypes.JSON,
		},
		plan2: {
			type: DataTypes.JSON,
		},
		plan3: {
			type: DataTypes.JSON,
		},
		plan4: {
			type: DataTypes.JSON,
		},
		total_plan: {
			type: DataTypes.JSON,
			defaultValue: {}
		},
	},
		{
			timestamps: false
		});

	return planList;
};