import Controller from '../core/baseController';
import { Sequelize, Op } from 'sequelize';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const { tag, ...otherquery }: {[key: string]: any} = { ...ctx.query };
    const tagQuery = tag?.split(',').filter(Boolean).map(item => ({ [Op.like]: `%,${item},%` })) || [];
    console.log(tagQuery);

    if (otherquery.id) otherquery.id = parseInt(otherquery.id, 10);
    if (otherquery.isPublic) otherquery.isPublic = parseInt(otherquery.isPublic, 10);

    const criteria = {
      attributes: [ 'id', 'title', 'tag', 'terminal', 'cove', 'discript', 'isPublic' ],
      where: {
        [Op.and]: [
          otherquery,
          Sequelize.where(Sequelize.literal('"," || tag || ","'), {
            [Op.and]: tagQuery,
          }),
        ],
      },
    };

    const data = await app.model.Template.findAll(criteria);
    ctx.body = data;

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
