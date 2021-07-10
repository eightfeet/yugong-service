import Controller from '../core/baseController';

export default class UserController extends Controller {
  /**
   * 查询用户信息
   */
  public async getUser() {
    // 根据参数获取用户
    const { ctx } = this;
    const query = ctx.query;
    if (!Object.keys(query).length) {
      ctx.body = [];
      return;
    }
    const data = await ctx.service.user.getByArgs('findAll', query, 'password');
    ctx.body = data;
  }

  public async create() {
    const ctx = this.ctx;
    const { name, password } = ctx.request.body;

    // 检查数据库里面是否存在这个用户名
    const user = await ctx.service.user.getByArgs(
      'findOne',
      { name },
      'password',
    );
    if (user) {
      ctx.status = 403;
      ctx.throw(403, '用户名已存在');
    }

    // 加密密码并创建账户
    const HSPassword = ctx.service.user.hashPassword(password);
    const result = ctx.model.User.create({
      name,
      password: HSPassword,
    });

    ctx.status = 201;
    ctx.body = result;
  }

  // 查询用户
  public async login() {
    const { ctx } = this;
    const { id } = ctx.params;

    // 查询主键值
    const data = await ctx.service.user.getByArgs(
      'findOne',
      { id },
      'password',
    );
    ctx.body = data;
  }
}
