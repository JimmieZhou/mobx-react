/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-20 09:46:19
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-20 09:46:21
 */
import { computed } from 'mobx';

class Store {
  @observable todos = [{
    title: "todo标题",
    done: false,
  },{
    title: "已经完成 todo 的标题",
    done: true,
  }];

  @computed get finishedTodos () {
    return  this.todos.filter((todo) => todo.done)
  }
}