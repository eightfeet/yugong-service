import { Application } from 'egg';


export default (app: Application) => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

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
    createdAt: DATE,
    updatedAt: DATE,
  }, {
    timestamps: true,
  });

  return Template;
};

