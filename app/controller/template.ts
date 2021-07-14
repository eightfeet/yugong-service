import Controller from '../core/baseController';
import { Sequelize, Op } from 'sequelize';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const { tag, limit, offset, ...otherquery }: {[key: string]: any} = { ...ctx.query };
    const tagQuery = tag?.split(',').filter(Boolean).map(item => ({ [Op.like]: `%,${item},%` })) || [];
    console.log(tagQuery);

    if (otherquery.id) otherquery.id = parseInt(otherquery.id, 10);
    if (otherquery.userId) otherquery.userId = parseInt(otherquery.userId, 10);
    if (otherquery.isPublic) otherquery.isPublic = parseInt(otherquery.isPublic, 10);
    // 私有且用户id与当前用户ID不一致时，禁止查询
    if (otherquery.isPublic === 0) {
      if (!otherquery.userId) ctx.throw('缺少参数 userId');
      if (otherquery.userId !== ctx.session.id) ctx.throw('未登录或userId与当前用户不匹配');
    }
    if (otherquery.title) {
      otherquery.title = {
        [Op.like]: `%${otherquery.title}%`,
      };
    }

    const criteria: any = {
      attributes: [ 'id', 'title', 'tag', 'terminal', 'cove', 'describe', 'isPublic', 'userId' ],
      where: {
        [Op.and]: [
          otherquery,
          Sequelize.where(Sequelize.literal('"," || tag || ","'), {
            [Op.and]: tagQuery,
          }),
        ],
      },
    };

    criteria.limit = Number(limit) ? Number(limit) : 4;
    criteria.offset = Number(offset) ? Number(offset) : 0;

    const data = await app.model.Template.findAndCountAll(criteria);

    ctx.body = {
      ...data,
      limit: criteria.limit,
      offset: criteria.offset,
    };

  }

  public async create() {
    const { ctx, app } = this;
    const { title, pageData, appData, tag, terminal, cove, describe, isPublic, userId } = ctx.request.body;
    const result = await app.model.Template.create({ title, pageData, appData, tag, terminal, cove, describe, isPublic, userId });
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
