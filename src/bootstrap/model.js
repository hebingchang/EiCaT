/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 *
 *global.xxx = async () => {
 *   let data = await Promise.resolve(111)
 *}
 */

/**
 * 获取模型字段信息
 * @param model_id 模型id 或 模型名称
 * @param id 数据id
 * @param field 字段
 * @param return 整条数据或字段数据
 * @
 */
/* global getmodelfield */
global.getmodelfield = async (model_id, id, field) => {
  let res;
  let table = await think.model('model', think.config('model')).get_table_name(model_id);
  let modelinfo = await think.model(table, think.config('model')).find(id);
  if (!think.isEmpty(field)) {
    res = modelinfo[field]
  } else {
    res = modelinfo;
  }
  return res;
}
/**
 * 获取模型字段
 * @param model_id
 * @param field
 * @returns {*}
 */
global.get_model = async (model_id, field) => {
  return await think.model('model', think.config('model')).get_model(model_id, field);

}