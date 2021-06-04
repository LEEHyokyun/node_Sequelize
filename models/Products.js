module.exports = (sequelize, DataTypes) => {
  //prodcuts에 대한 data를 담는 table
  const Products = sequelize.define("Products", {
    //atuoIncrement : 1씩 자동증가
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
  });
  return Products;
};
