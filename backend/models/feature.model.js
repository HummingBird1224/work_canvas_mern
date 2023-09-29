module.exports = (sequelize, Sequelize) => {
  const featureList = sequelize.define("wc_features", {
    insurance: {
      type: Sequelize.STRING,
    },
    social_insurance: {
      type: Sequelize.ENUM(['0', '1'])
    },
    health_insurance: {
      type: Sequelize.ENUM(['1', '2', '3', '4', '5', '6'])
    },
    full_te: {
      type: Sequelize.ENUM(['0', '1'])
    },
    full_te_amount: {
      type: Sequelize.INTEGER,
    },
    part_te: {
      type: Sequelize.ENUM(['0', '1'])
    },
    part_te_amount: {
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
    outsorucing_vacation: {
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
      type: Sequelize.STRING,
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
      type: Sequelize.STRING,
    },
    mid_hiring: {
      type: Sequelize.STRING,
    },
    short_hiring: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    license_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    black_period_hiring: {
      type: Sequelize.ENUM(['1', '2', '3'])
    },
    colorists_hiring: {
      type: Sequelize.ENUM(['0', '1'])
    },
    assistant_skills: {
      type: Sequelize.STRING,
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
    fs_trial_months: {
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
    fa_trial_months: {
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
    shampoo_basin_type: {
      type: Sequelize.STRING,
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
    p_trial_months: {
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
    ooo_training_offer: {
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
    contests_support: {
      type: Sequelize.ENUM(['0', '1'])
    },
    contests_support_detail: {
      type: Sequelize.STRING,
    },
    hairdresser_working_type: {
      type: Sequelize.STRING,
    },
    customer_service_style: {
      type: Sequelize.ENUM(['1', '2', '3'])
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