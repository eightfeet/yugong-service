
import * as path from 'path';
import Controller from '../core/baseController';
import * as sendToWormhole from 'stream-wormhole';

export default class UploadController extends Controller {
  public async upload() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    console.log('xxxxx=====', ctx.getFileStream());
    const name = 'yugong_upload/' + path.basename(stream.filename);
    // 文件处理，
    let result;
    try {
      result = { url: 'xxxxx' };
      console.log(result, name);
    } catch (err) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }

    ctx.body = {
      url: result.url,
      // 所有表单字段都能通过 `stream.fields` 获取到
      fields: stream.fields,
    };
  }
}

