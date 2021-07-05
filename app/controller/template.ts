import Controller from '../core/base_controller';
import publicTpl from '../data/data';
import tpl1 from '../data/tpl1';
import tpl4 from '../data/tpl4';

export default class HomeController extends Controller {
/**
 * create
 * 创建模板
 */
  public async create() {
    const { ctx } = this;
    this.success(ctx.request.body);
  }

  /**
   * delete
   * 删除模板
   */
  public delete() {
    this.success('删除模板');
  }

  /**
   * edit
   * 编辑模板
   */
  public edit() {
    this.success('编辑模板');
  }

  /**
   * getList
   * 查询模板列表
   */
  public getList() {
    const { ctx } = this;
    console.log(this.app);
    console.log(ctx);
    const query = ctx.query;
    let result;
    if (query.type === '2') result = publicTpl;
    this.success(result);
  }

  /**
   * getItem
   * 查询模板列表
   */
  public getItem() {
    const { ctx } = this;
    const query = ctx.query;
    let result;
    if (query.id === '1') result = tpl1;
    if (query.id === '4') result = tpl4;
    this.success(result);
  }

  /**
   * publish
   * 发布为公共模板
   */
  public publish() {
    this.success('发布模板');
  }

  /**
   * unpublish
   * 取消发布为公共模板
   */
  public unpublish() {
    this.success('取消模板发布');
  }
}
