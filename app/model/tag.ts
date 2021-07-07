import { Application } from 'egg';


export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
  }, {
    timestamps: false,
  });

  return User;
};

