const dbConfig = require("../configs/postgre-config_server");
// const dbConfig = require("../configs/postgre-config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
sequelize.sync({ alter: true });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require("./user.model.js")(sequelize, Sequelize);
db.Company = require("./company.model.js")(sequelize, Sequelize);
db.FeatureList = require("./feature_list.model.js")(sequelize, Sequelize);
db.GeneralFeature = require("./general_feature.model.js")(sequelize, Sequelize);
db.HairdresserFeature = require("./hairdresser_feature.model.js")(sequelize, Sequelize);
db.EyelistFeature = require("./eyelist_feature.model.js")(sequelize, Sequelize);
db.NailistFeature = require("./nailist_feature.model.js")(sequelize, Sequelize);
db.PayList = require("./pay_list.model.js")(sequelize, Sequelize);
db.PaymentBank = require("./payment_bank.model.js")(sequelize, Sequelize);
db.PaymentCard = require("./payment_card.model.js")(sequelize, Sequelize);
db.Plan = require("./plan.model.js")(sequelize, Sequelize);
db.Billing = require("./billing.model.js")(sequelize, Sequelize);
db.Store = require("./store.model.js")(sequelize, Sequelize);

// db.Company.hasMany(db.User, { foreignKey: 'company_id' });
// db.User.belongsTo(db.Company, { foreignKey: 'company_id' });
db.Company.hasMany(db.Store, { foreignKey: 'company_id' });
db.Store.belongsTo(db.Company, { foreignKey: 'company_id' });
db.Company.hasOne(db.Billing, { foreignKey: 'company_id' });
db.Billing.belongsTo(db.Company, { foreignKey: 'company_id' });
// db.Gacha.hasMany(db.GachaUser, { foreignKey: 'gacha_id' });
// db.GachaUser.belongsTo(db.Gacha, { foreignKey: 'gacha_id' });
// db.User.hasMany(db.GachaUser, { foreignKey: 'user_id' });
// db.GachaUser.belongsTo(db.User, { foreignKey: 'user_id' });
// db.Address.hasMany(db.GachaUser, { foreignKey: 'address_id' });
// db.GachaUser.belongsTo(db.Address, { foreignKey: 'address_id' });


// db.GachaUser.hasMany(db.User);
// db.User.belongsTo(db.GachaUser);
// db.GachaUser.hasMany(db.Gacha);
// db.Gacha.belongsTo(db.GachaUser);
// db.User.belongsToMany(db.Gacha, { through: 'GachaUser' });
// db.Gacha.belongsToMany(db.User, { through: 'GachaUser' });

module.exports = db;