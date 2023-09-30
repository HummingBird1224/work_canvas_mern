// const dbConfig = require("../configs/postgre-config_server");
const dbConfig = require("../configs/mysql-config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, dbConfig);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require("./user.model.js")(sequelize, Sequelize);
db.Company = require("./company.model.js")(sequelize, Sequelize);
db.Feature = require("./feature.model.js")(sequelize, Sequelize);
db.PayList = require("./pay_list.model.js")(sequelize, Sequelize);
db.PaymentBank = require("./payment_bank.model.js")(sequelize, Sequelize);
db.PaymentCard = require("./payment_card.model.js")(sequelize, Sequelize);
db.Plan = require("./plan.model.js")(sequelize, Sequelize);
db.Store = require("./store.model.js")(sequelize, Sequelize);

db.Company.hasMany(db.Store, { foreignKey: 'company_id' });
db.Store.belongsTo(db.Company, { foreignKey: 'company_id' });
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