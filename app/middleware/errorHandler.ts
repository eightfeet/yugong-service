import { Context } from 'egg';

/**
 * 错误处理
 * @param {Context<any>} ctx
 * @param {() => any} next
 */
async function errorHandler(ctx: Context<any>, next: () => any) {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err, ctx);
    const status = err.status || 500;
    // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
    const error =
            status === 500 && ctx.app.config.env === 'prod'
              ? 'Internal Server Error'
              : err.message;

    // 从 error 对象上读出各个属性，设置到响应中
    ctx.body = { error };
    if (status === 422) {
      ctx.body.detail = err.errors;
    }
    ctx.status = status;
  }
}

export default () => errorHandler;
