import Controller from '../core/base_controller';

export default class UserController extends Controller {
  async create() {
    const ctx = this.ctx;

    // const { name, age } = ctx.request.body;
    const user = await ctx.model.User.create({ name: '11', age: 11 });
    ctx.status = 201;
    ctx.body = user;
  }
}
