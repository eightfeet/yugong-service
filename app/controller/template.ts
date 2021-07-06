import Controller from '../core/baseController';
// import publicTpl from '../data/data';
// import tpl1 from '../data/tpl1';
// import tpl4 from '../data/tpl4';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const query: {[key: string]: any} = { ...ctx.query };
    if (query.id) query.id = parseInt(query.id, 10);
    if (query.isPublic) query.isPublic = parseInt(query.isPublic, 10);
    // 查询主键值
    const data = await app.model.Template.findAll({
      attributes: [ 'id', 'title', 'tag', 'terminal', 'cove', 'discript', 'isPublic' ],
      where: query,
    });
    ctx.body = data;

    // const query = ctx.query;
    // let result;
    // if (query.type === '2') result = publicTpl;
    // ctx.body = result;
  }

  public async create() {
    const { ctx, app } = this;
    const { title, pageData, appData, tag, terminal, cove, discript, isPublic } = ctx.request.body;
    const result = await app.model.Template.create({ title, pageData, appData, tag, terminal, cove, discript, isPublic });
    ctx.body = result.getDataValue('id');
  }

  public async show() {
    const { ctx, app } = this;
    const { id } = ctx.params;
    // 查询主键值
    const data = await app.model.Template.findByPk(parseInt(id, 10));
    ctx.body = data;

    // let result;
    // if (query.id === '1') result = tpl1;
    // if (query.id === '4') result = tpl4;
    // ctx.body = result;
  }

  public async update() {
    const { ctx, app } = this;
    const id = parseInt(ctx.params.id, 10);
    const update = ctx.request.body;
    // 查询主键值
    const data = await app.model.Template.update(update, {
      where: {
        id,
      },
    });
    ctx.body = data;
  }

  public async destroy() {
    const { ctx, app } = this;
    const { id } = ctx.params;
    // 查询主键值
    await app.model.Template.destroy({
      where: {
        id: parseInt(id, 10),
      },
    });
    ctx.body = true;
  }

}
