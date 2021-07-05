import { Application } from 'egg';


export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  const Template = app.model.define('template', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    discript: STRING,
    cove: STRING,
    terminal: STRING,
    tag: STRING,
    pageData: STRING,
    appData: STRING,
  }, {
    timestamps: false,
  });

  return Template;
};

