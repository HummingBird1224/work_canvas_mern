const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const featureList = sequelize.define("wc_nailist_features", {
    company_id: {
      type: Sequelize.INTEGER
    },
    graduaction_necessary: {
      type: Sequelize.ENUM(['0', '1'])
    },
    license_necessary: {
      type: Sequelize.ENUM(['0', '1'])
    },
    part_min_days: {
      type: Sequelize.INTEGER
    },
    part_min_hours: {
      type: Sequelize.INTEGER
    },
    black_period_hiring: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    shorter_hiring_status: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    full_experienced_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    full_inexperienced_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    contract_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    part_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    new_training_curriculum: {
      type: Sequelize.ENUM(['0', '1'])
    },
    practice_session: {
      type: Sequelize.ENUM(['0', '1'])
    },
    business_practice: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    mtm_training: {
      type: Sequelize.ENUM(['0', '1'])
    },
    missing_skill_follow_up: {
      type: Sequelize.ENUM(['0', '1'])
    },
    naillist_working_types: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    uniform_rule: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    monthly_average_customer: {
      type: Sequelize.INTEGER,
    },
    multi_work: {
      type: Sequelize.ENUM(['0', '1'])
    },
    average_customer_cost: {
      type: Sequelize.INTEGER,
    },
    average_treatment_time: {
      type: Sequelize.INTEGER,
    },
  },
    {
      timestamps: false
    });

  return featureList;
};