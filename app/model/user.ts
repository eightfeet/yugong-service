import { Application } from 'egg';


export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    age: INTEGER,
  }, {
    timestamps: false,
  });

  return User;
};
