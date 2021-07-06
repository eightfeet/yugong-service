import Controller from '../core/baseController';
// import publicTpl from '../data/data';
import tpl1 from '../data/tpl1';
import tpl4 from '../data/tpl4';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const data = await app.model.Template.findByPk(10);
    ctx.body = data;

    // const query = ctx.query;
    // let result;
    // if (query.type === '2') result = publicTpl;
    // ctx.body = result;
  }

  public async new() {
    // const res = await this.ctx.curl()
    this.checkSuccess('result');
  }

  public async create() {
    const { ctx, app } = this;
    const { title, pageData, appData, tag, terminal, cove, discript } = ctx.request.body;
    console.log(title);
    app.model.Template.create({ title, pageData, appData, tag, terminal, cove, discript });
    this.checkSuccess(ctx.request.body);
  }

  public async show() {
    const { ctx } = this;
    const query = ctx.query;
    let result;
    if (query.id === '1') result = tpl1;
    if (query.id === '4') result = tpl4;
    ctx.body = result;
  }

  public async edit() {
    this.checkSuccess('edit');
  }

  public async update() {
    this.checkSuccess('update');
  }

  public async destroy() {
    this.checkSuccess('destroy');
  }

}
