// app/core/base_controller.js
import { Controller } from 'egg';
class BaseController extends Controller {
  public get user() {
    return this.ctx.session.user;
  }

  public success(data: any) {
    this.ctx.body = {
      success: true,
      data,
    };
  }

  public notFound(msg: string) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
export default BaseController;
