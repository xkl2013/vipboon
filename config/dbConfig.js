const Sequelize = require('sequelize');
const dbConfig = {
  database: 'vipboon', // 使用哪个数据库
  username: 'vipboon', // 用户名
  password: 'abcd1234!', // 口令
  host: '47.99.98.253', // 主机名
  port: 3306, // 端口号，MySQL默认3306
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
  },
});
// 测试连接成功与否
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
