
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    age: INTEGER,
  }, {
    timestamps: false,
  });

  return User;
};
