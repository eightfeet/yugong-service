import Controller from '../core/baseController';

export default class UserController extends Controller {

  /**
   * 查询用户信息
   */
  public async index() {
    // 根据参数获取用户
    const { ctx } = this;
    const data = await ctx.service.user.getByArgs('findAll', {}, 'password');
    ctx.body = data;
  }

  public async create() {
    const ctx = this.ctx;
    // const { name, age } = ctx.request.body;
    const user = await ctx.model.User.create({ name: '11', age: 11 });
    ctx.status = 201;
    ctx.body = user;
  }
  // 查询用户
  public async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    // 查询主键值
    const data = await ctx.service.user.getByArgs('findOne', { id }, 'password');
    ctx.body = data;
  }
}
