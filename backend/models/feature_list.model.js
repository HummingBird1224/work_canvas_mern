module.exports = (sequelize, Sequelize) => {
  const featureList = sequelize.define("wc_feature_lists", {
    category: {
      type: Sequelize.ENUM(['0', '1', '2', '3', '4'])
    },
    title: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM(['0', '1']),
      defaultValue: '0'
    },
    model_name: {
      type: Sequelize.ENUM([
        'GeneralFeature',
        'HairdresserFeature',
        'EyelistFeature',
        'NailistFeature'
      ])
    },
  },
    {
      timestamps: false
    });

  return featureList;
};