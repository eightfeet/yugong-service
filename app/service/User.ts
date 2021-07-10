import { Service } from 'egg';
import bcrypt from 'bcryptjs';

/**
 * 由于密码特殊所以我们需要将密码加密后再存到数据库里面，比对的时候也是比对的加密后的密码，这里用到的是加密算法BCrypt
 */

export default class UserService extends Service {
  /**
   * 根据参数获取用户数据
   * @param type findOne | findAll
   * @param params 参数对象
   * @param exclude 排除字段
   * @return
   */
  public async getByArgs(
    type: 'findOne' | 'findAll',
    params: { [keys: string]: any },
    exclude: string,
  ) {
    const { ctx } = this;
    const query = {
      // 搜索数据库中的一个特定元素
      where: params,
      attributes: {
        exclude: exclude.split(','),
      },
    };

    let result;
    if (type === 'findOne') result = await ctx.model.User.findOne(query);
    if (type === 'findAll') result = await ctx.model.User.findAll(query);

    return result;
  }

  /**
   * 密码hash
   */
  public hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10); // 处理数据的轮次数
    return bcrypt.hashSync(password, salt); // 将密码转为加密值
  }

  /**
   * 将密码跟加密的密码对比
   */
  public cpmpareSync(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }
}

