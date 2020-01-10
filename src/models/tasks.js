module.exports = (sequelize, DateType) => {
  const Tasks = sequelize.define("Tasks", {
    id: {
      type: DateType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DateType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: DateType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  Tasks.associate = models => {
    Tasks.belongsTo(models.Users);
  };
  return Tasks;
};
