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
  router.get('/api/user/getuser', controller.user.getUser);
  // 注册
  router.post('/api/register', controller.user.create);
  // 登录
  router.post('/api/login', controller.user.login);
  // 退出
  router.post('/api/loginOut', controller.user.loginOut);
  // 同步登录
  router.get('/api/userSync', controller.login.userSync);
};
