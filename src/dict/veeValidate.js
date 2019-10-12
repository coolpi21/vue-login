import { extend, localize } from 'vee-validate'
import { required, email, min, length } from 'vee-validate/dist/rules'
import ZH from 'vee-validate/dist/locale/zh_CN'

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

// const dictionary = {
//   zh: {
//     messages: {
//       required: field => '请输入' + field,
//       length: () => '验证码长度要求4',
//       min: () => '不符合密码最小长度要求',
//       email: () => '请输入正确的邮箱格式'
//     },
//     attributes: {
//       length: '验证码',
//       password: '密码',
//       email: '用户名'
//     }
//   }
// }

/**
 * 3.x vee-validate 语言设置方法
 */
/**
 * vee-validate extend 扩展验证机制及使用方式
 * @param {string} name 验证机制名称
 * @param {Object} 扩展机制自定义
 */
extend('email', {
  ...email
})
extend('required', {
  ...required
})
extend('min', {
  ...min
})
extend('length', {
  ...length
})

/**
 * 本地化自定义验证提示消息
 * @param {Object} 字典类型
 * @property {Object} messages 提示验证信息
 * @property {Object} names 提供 vildationprovider name 别名功能
 * {_field_} name 属性的占位符
 */
localize({
  ZH: {
    messages: {
      // 具体配置可参考本地 local 文件
      required: '请输入{_field_}',
      email: '请输入正确的邮箱格式',
      min: '请输入至少{length}位数的{_field_}',
      length: '{_field_}必须为{length}位'
    },
    names: {
      email: '用户名',
      password: '密码',
      code: '验证码'
    }
  }
})

localize('ZH')
