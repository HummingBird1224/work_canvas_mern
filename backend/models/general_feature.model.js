const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const featureList = sequelize.define("wc_general_features", {
    company_id: {
      type: Sequelize.INTEGER
    },
    insurance: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    social_insurance: {
      type: Sequelize.ENUM(['0', '1'])
    },
    health_insurance: {
      type: Sequelize.ENUM(['1', '2', '3', '4', '5', '6']),

    },
    full_traffic: {
      type: Sequelize.ENUM(['0', '1'])
    },
    full_traffic_amount: {
      type: Sequelize.INTEGER,
    },
    part_traffic: {
      type: Sequelize.ENUM(['0', '1'])
    },
    part_traffic_amount: {
      type: Sequelize.INTEGER,
    },
    vacation: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    full_vacation: {
      type: Sequelize.ENUM(['1', '2', '3', '4'])
    },
    part_vacation: {
      type: Sequelize.ENUM(['1', '2', '3', '4'])
    },
    outsourcing_vacation: {
      type: Sequelize.ENUM(['1', '2', '3', '4'])
    },
    paid_holidays: {
      type: Sequelize.ENUM(['0', '1'])
    },
    summer_holidays: {
      type: Sequelize.ENUM(['0', '1'])
    },
    summer_days: {
      type: Sequelize.INTEGER,
    },
    summer_condition: {
      type: Sequelize.STRING,
    },
    winter_holidays: {
      type: Sequelize.ENUM(['0', '1'])
    },
    winter_days: {
      type: Sequelize.INTEGER,
    },
    winter_condition: {
      type: Sequelize.STRING,
    },
    online_interview: {
      type: Sequelize.ENUM(['0', '1'])
    },
    working_hours: {
      type: Sequelize.STRING,
    },
    business_hours: {
      type: Sequelize.STRING,
    },
    w_work: {
      type: Sequelize.ENUM(['0', '1'])
    },
    w_work_condition: {
      type: Sequelize.STRING,
    },
    multiple_business: {
      type: Sequelize.ENUM(['0', '1'])
    },
    business_types: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    dormitory: {
      type: Sequelize.ENUM(['0', '1'])
    },
    dormitory_condition: {
      type: Sequelize.STRING,
    },
    housing_allowance: {
      type: Sequelize.ENUM(['0', '1'])
    },
    housing_allowance_detail: {
      type: Sequelize.STRING,
    },
    bonus: {
      type: Sequelize.ENUM(['0', '1'])
    },
    bonus_detail: {
      type: Sequelize.STRING,
    },
    retirement_allowance: {
      type: Sequelize.ENUM(['0', '1'])
    },
    retirement_allowance_detail: {
      type: Sequelize.STRING,
    },
    childcare_center: {
      type: Sequelize.ENUM(['0', '1'])
    },
    maternity_vacation: {
      type: Sequelize.ENUM(['0', '1'])
    },
    maternity_vacation_condition: {
      type: Sequelize.STRING,
    },
    car_commute: {
      type: Sequelize.ENUM(['0', '1'])
    },
    short_time_working: {
      type: Sequelize.ENUM(['0', '1'])
    },
    special_salary: {
      type: Sequelize.STRING,
    },
    tour_interview: {
      type: Sequelize.ENUM(['1', '2', '3', '4', '5'])
    },
    first_interview: {
      type: Sequelize.ENUM(['1', '2', '3', '4'])
    },
    new_hiring: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    mid_hiring: {
      type: DataTypes.JSON,
      defaultValue: []
    },
  },
    {
      timestamps: false
    });

  return featureList;
};