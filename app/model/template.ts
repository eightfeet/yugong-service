import { Application } from 'egg';


export default (app: Application) => {
  const { INTEGER, STRING } = app.Sequelize;

  const Template = app.model.define('template', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    describe: STRING,
    cove: STRING,
    terminal: STRING,
    tag: STRING,
    pageData: STRING,
    appData: STRING,
    isPublic: INTEGER,
    userId: INTEGER,
  }, {
    timestamps: false,
  });

  return Template;
};

