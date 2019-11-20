/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-20 09:46:45
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-20 09:46:48
 */
import {observable, action} from 'mobx';

class TestStore {
    @observable name; 
    // 定义action(动作)
    @action 
    changeName = name => {
        this.name = name
    }

    constructor() {
        this.name = '浮云先生'
    }
}
const test = new TestStore() 
export default test