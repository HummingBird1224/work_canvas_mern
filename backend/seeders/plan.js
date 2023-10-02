// const { User } = require("../models");

// var data = {
//   business_type: '美容師',
//   plan1: {
//     degree: "美容師免許なし",
//     price: "16.5",
//     license: "",
//     senior: "0"
//   },
//   plan2: {
//     degree: "新卒／アシスタント",
//     price: "22",
//     license: "美容師免許有り",
//     senior: "0"
//   },
//   plan3: {
//     degree: "スタイリスト",
//     price: "33",
//     license: "美容師免許有り",
//     senior: "1"
//   },
//   plan3: {
//     degree: "管理美容師",
//     price: "38.5",
//     license: "美容師免許有り",
//     senior: "1"
//   },
//   total_plan: [
//     "資格なし 16.5万円(税込)",
//     "新卒(資格取得見込み) 22万円(税込)",
//     "アシスタント(資格あり) 22万円(税込)",
//     "スタイリスト(資格あり) 33万円(税込)",
//     "管理美容師(資格あり) 38.5万円(税込)"
//   ]
// };

// async function seed() {
//   try {
//     await User.create(data);
//     console.log('seed done');
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// seed();

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define your seed data here
    var data = {
      business_type: '美容師',
      plan3: {
        degree: "スタイリスト",
        price: 33,
        license: "美容師免許有り",
        senior: 1
      },
      plan1: {
        degree: "美容師免許なし",
        price: 16.5,
        license: "",
        senior: 0
      },
      plan2: {
        degree: "新卒／アシスタント",
        price: 22,
        license: "美容師免許有り",
        senior: 0
      },
      plan4: {
        degree: "管理美容師",
        price: 38.5,
        license: "美容師免許有り",
        senior: 1
      },
      total_plan: [
        "資格なし 16.5万円(税込)",
        "新卒(資格取得見込み) 22万円(税込)",
        "アシスタント(資格あり) 22万円(税込)",
        "スタイリスト(資格あり) 33万円(税込)",
        "管理美容師(資格あり) 38.5万円(税込)"
      ]
    };

    // Insert the seed data into your database
    await queryInterface.insert('Plan', [data], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seed data from your database
    await queryInterface.delete('Test', null, {});
  }
};