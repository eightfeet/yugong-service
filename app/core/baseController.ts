// app/core/base_controller.js
import { Controller } from 'egg';
class BaseController extends Controller {
  public get user() {
    return this.ctx.session.user;
  }

  // 封装统一的调用检查函数，可以在查询、创建和更新等 service 中复用
  public checkSuccess(result: any) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }

  public notFound(msg: string) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
export default BaseController;
