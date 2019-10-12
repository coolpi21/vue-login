import { Validator } from 'vee-validate'

/**
 * vee-validate 2.0版本 rules 文档，官方现已升级至 3.0
 * http://vee-validate.logaretm.com/v2/guide/rules.html
 * @type {Object} dictionary 自定义错误信息显示
 * @property {object} zh validator.localize 中的字典参数
 * @property {object} messages 错误信息
 * @property {object} attributes 错误信息field 名，对应 input 框中的 name 属性
 * @property {function} required 返回是否显示需要输入错误的信息
 * @property {function} length 返回是否显示长度错误的信息
 * @property {function} min 返回是否显示最小值错误的信息
 * @property {function} email 返回是否显示邮箱错误的信息
 */

const dictionary = {
  zh: {
    messages: {
      required: field => '请输入' + field,
      length: () => '验证码长度要求4',
      min: () => '不符合密码最小长度要求',
      email: () => '请输入正确的邮箱格式'
    },
    attributes: {
      length: '验证码',
      password: '密码',
      email: '用户名'
    }
  }
}

Validator.localize(dictionary)
