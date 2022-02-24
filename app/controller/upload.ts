
import * as path from 'path';
import * as fs from 'fs';
import Controller from '../core/baseController';

export default class UploadController extends Controller {
  public async upload() {
    const { ctx, config } = this;

    const parts = ctx.multipart();
    let part;
    const result: any[] = [];
    // parts() 返回 promise 对象
    while ((part = await parts()) != null) {
      let length = 0;
      if (part.length) {
        length = part[1];
        // 获取其他参数
      } else {
        if (!part.filename) return;
        // 处理文件流
        const file: {[keys: string]: any} = {};
        file.name = part.filename;
        file.type = part.mimeType;
        const suffix = part.mimeType.split('/')[1];
        const fileName = `yg_${Date.now()}_${Math.floor((Math.random() * 100) + 1)}.${suffix}`;
        const filePath = path.join(this.config.baseDir, 'app/public/uploads', fileName); // 保存地址
        const writable = fs.createWriteStream(filePath);// 创建写入流
        await part.pipe(writable); // 开始写入
        file.fileUrl = `${config.webHost}/public/uploads/${fileName}`;
        result.push(file);
      }
      console.log(length);

    }
    ctx.status = 200;
    ctx.body = result[0];
  }
}

