import Controller from '../core/baseController';

export default class LoginController extends Controller {
  public async userSync() {
    const { ctx } = this;
    const loginToken = ctx.cookies.get('token');
    if (loginToken) {
      const cpmpare = ctx.service.user.cpmpareSync(ctx.session.username, loginToken);
      if (cpmpare) {
        ctx.body = ctx.session;
        return;
      }
    }
    ctx.body = {};
  }
}
