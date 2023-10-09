const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const featureList = sequelize.define("wc_hairdresser_features", {
    company_id: {
      type: Sequelize.INTEGER
    },
    hiring_status: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    no_license_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    blank_period_hiring: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    colorist_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    assistant_skills: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    part_min_days: {
      type: Sequelize.INTEGER,
    },
    part_min_hours: {
      type: Sequelize.INTEGER,
    },
    contract_stylist_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    cs_nomination_fee: {
      type: Sequelize.INTEGER,
    },
    cs_free_commission: {
      type: Sequelize.INTEGER,
    },
    cs_guaranteed_salary: {
      type: Sequelize.ENUM(['0', '1'])
    },
    cs_guaranteed_salary_condition: {
      type: Sequelize.STRING,
    },
    cs_other_salary: {
      type: Sequelize.STRING,
    },
    cs_average_income: {
      type: Sequelize.INTEGER,
    },
    cs_drug_costs: {
      type: Sequelize.ENUM(['0', '1'])
    },
    cs_utility_costs: {
      type: Sequelize.ENUM(['0', '1'])
    },
    full_stylist_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fs_basic_salary: {
      type: Sequelize.INTEGER,
    },
    fs_nomination_fee: {
      type: Sequelize.INTEGER,
    },
    fs_free_commission: {
      type: Sequelize.INTEGER,
    },
    fs_trial: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fs_trial_month: {
      type: Sequelize.INTEGER,
    },
    fs_trial_full_employed: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fs_trial_salary_change: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fs_added_allowance_detail: {
      type: Sequelize.STRING,
    },
    fs_average_income: {
      type: Sequelize.INTEGER,
    },
    full_assistant_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fa_basic_salary: {
      type: Sequelize.INTEGER,
    },
    fa_trial: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fa_trial_month: {
      type: Sequelize.INTEGER,
    },
    fa_trial_full_employed: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fa_trial_salary_change: {
      type: Sequelize.ENUM(['0', '1'])
    },
    fa_increase_salary_detail: {
      type: Sequelize.STRING,
    },
    fa_added_allowance_detail: {
      type: Sequelize.STRING,
    },
    fa_average_income: {
      type: Sequelize.INTEGER,
    },
    fa_cs_average_income: {
      type: Sequelize.INTEGER,
    },
    hair_makeup_offer: {
      type: Sequelize.ENUM(['0', '1'])
    },
    hair_makeup_detail: {
      type: Sequelize.STRING,
    },
    head_spa: {
      type: Sequelize.ENUM(['0', '1'])
    },
    head_spa_education: {
      type: Sequelize.STRING,
    },
    spanist_work: {
      type: Sequelize.ENUM(['0', '1'])
    },
    dressing: {
      type: Sequelize.ENUM(['0', '1'])
    },
    dressing_skill_education: {
      type: Sequelize.STRING,
    },
    shampoo_types: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    photo_session: {
      type: Sequelize.ENUM(['0', '1'])
    },
    photo_session_detail: {
      type: Sequelize.STRING,
    },
    men_salon_type: {
      type: Sequelize.ENUM(['1', '2', '3', '4'])
    },
    part_worker_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    ps_hourly: {
      type: Sequelize.INTEGER,
    },
    pa_hourly: {
      type: Sequelize.INTEGER,
    },
    p_trial: {
      type: Sequelize.ENUM(['0', '1'])
    },
    p_trial_month: {
      type: Sequelize.INTEGER,
    },
    p_trial_salary_change: {
      type: Sequelize.ENUM(['0', '1'])
    },
    p_added_allowance_detail: {
      type: Sequelize.STRING,
    },
    practice_session: {
      type: Sequelize.ENUM(['0', '1'])
    },
    practice_times: {
      type: Sequelize.INTEGER,
    },
    business_practice: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    mtm_training: {
      type: Sequelize.ENUM(['0', '1'])
    },
    new_employee_training: {
      type: Sequelize.ENUM(['0', '1'])
    },
    inexperience_debut_years: {
      type: Sequelize.INTEGER,
    },
    mid_debut_months: {
      type: Sequelize.INTEGER,
    },
    lesson_place: {
      type: Sequelize.ENUM(['0', '1'])
    },
    missing_skill_follow_up: {
      type: Sequelize.ENUM(['0', '1'])
    },
    missing_follow_up_detail: {
      type: Sequelize.STRING,
    },
    contest_support: {
      type: Sequelize.ENUM(['0', '1'])
    },
    contest_support_detail: {
      type: Sequelize.STRING,
    },
    hairdresser_working_type: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    customer_service_style: {
      type: Sequelize.ENUM(['1', '2'])
    },
    stylist_average_customers: {
      type: Sequelize.INTEGER,
    },
  },
    {
      timestamps: false
    });

  return featureList;
};