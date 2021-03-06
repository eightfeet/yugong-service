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

  /**
   * 注册
   */
  public async create() {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;

    // 检查数据库里面是否存在这个用户名
    const user = await ctx.service.user.getByArgs(
      'findOne',
      { username },
      'password',
    );
    if (user) {
      ctx.status = 403;
      ctx.throw(403, '用户名已存在');
    }

    // 加密密码并创建账户
    const HSPassword = ctx.service.user.hashPassword(password);
    const result = await ctx.model.User.create({
      username,
      password: HSPassword,
    });
    ctx.status = 201;
    ctx.body = result;
  }

  /**
   * 登录
   */
  public async login() {
    const { ctx } = this;
    const { username } = ctx.request.body;

    // 根据唯一用户名查询用户
    const data = await ctx.service.user.getByArgs(
      'findOne',
      { username },
      '',
    );


    if (!data) {
      ctx.throw('用户名不存在！');
    }

    // 密码检查
    const { password, ...otherValue } = data.dataValues;
    const cpmpare = ctx.service.user.cpmpareSync(ctx.request.body.password, password);
    if (!cpmpare) {
      ctx.throw('密码不正确！');
    }

    const token = ctx.service.user.hashPassword(otherValue.username);
    // 缓存到session
    ctx.session = otherValue;
    ctx.body = otherValue;
    ctx.cookies.set('token', token);
  }

  /**
   * 退出登录
   */
  public loginOut() {
    const { ctx } = this;
    ctx.session = null;
    ctx.cookies.set('token', null);
    ctx.body = '';
  }
}
