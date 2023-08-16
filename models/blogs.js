const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blogs extends Model {}

Blogs.init(
  {
    id: {
      type: Datatypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    text: {
      type: Datatypes.STRING,
    },
    date_created: {
      type: Datatypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: Datatypes.INTERGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blogs",
  }
);

module.exports = Blogs;