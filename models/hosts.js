module.exports = function(sequelize, DataTypes) {
  var hosts = sequelize.define("hosts", {
    host: DataTypes.STRING,
    address: DataTypes.TEXT,
    amenities: DataTypes.TEXT
  });
  return hosts;
};
