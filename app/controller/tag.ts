import Controller from '../core/baseController';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const query: {[key: string]: any} = { ...ctx.query };
    if (query.id) query.id = parseInt(query.id, 10);
    if (query.isPublic) query.isPublic = parseInt(query.isPublic, 10);
    // 查询主键值
    const data = await app.model.Tag.findAll({
      attributes: [ 'id', 'name' ],
      where: query,
    });
    ctx.body = data;
  }
}
