module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define('Todo', {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    complete: DataTypes.BOOLEAN,
  });
  return Todo;
};
