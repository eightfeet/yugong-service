import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const errorHandler = app.middleware.errorHandler();
  router.get('/', controller.home.index);
  // 模板操作
  router.resources('template', '/api/template', errorHandler, controller.template);
  // 标签
  router.resources('tag', '/api/tag', errorHandler, controller.tag);
  router.get('/api/user', controller.user.create);
};
