import Controller from '../core/base_controller';

export default class HomeController extends Controller {
/**
 * create
 * 创建模板
 */
  public async create() {
    this.success('创建模板');
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
    this.success('查询模板列表。公共模板，私有模板');

  }

  /**
   * getItem
   * 查询模板列表
   */
  public getItem() {
    this.success('查询模板项。公共模板，私有模板');
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
