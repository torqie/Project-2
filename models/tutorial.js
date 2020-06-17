
module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define('Tutorial', {
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
      defaultValue: true,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {});
  Tutorial.associate = (models) => {
    // Associations can be defined here
    Tutorial.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Tutorial.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Tutorial;
};
