import { Application } from 'egg';


export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    password: STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return User;
};

