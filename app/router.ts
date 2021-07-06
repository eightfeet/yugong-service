import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const errorHandler = app.middleware.errorHandler();
  router.get('/', controller.home.index);
  // 模板操作
  router.resources('template', '/api/template', errorHandler, controller.template);
  // router.post('/api/template/create', controller.template.create);
  // router.post('/api/template/delete', controller.template.delete);
  // router.post('/api/template/edit', controller.template.edit);
  // router.get('/api/template/getItem', controller.template.getItem);
  // router.get('/api/template/getList', controller.template.getList);
  // router.post('/api/template/publish', controller.template.publish);
  // router.post('/api/template/unpublish', controller.template.unpublish);
  router.get('/api/user', controller.user.create);
};
