
module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define('Tutorial', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Tutorial.associate = (models) => {
    // associations can be defined here
    Tutorial.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Tutorial;
};
