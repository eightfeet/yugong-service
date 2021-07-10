import Controller from '../core/baseController';

export default class LoginController extends Controller {
  public async create() { this.ctx.body = '登录'; }
}
