import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const errorHandler = app.middleware.errorHandler();
  router.get('/', controller.home.index);
  // 模板操作
  router.resources('template', '/api/template', errorHandler, controller.template);
  // 标签
  router.resources('tag', '/api/tag', errorHandler, controller.tag);
  // 用户
  router.resources('user', '/api/user', controller.user);
  // 登录
  router.post('/api/login', controller.login.create);
};
