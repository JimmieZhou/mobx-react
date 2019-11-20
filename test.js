/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-20 09:43:02
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-20 09:43:05
 */
import {observable} from 'mobx';

class TestStore {
    // 被观察者
    @observable name; 
    constructor() {
        this.name = '浮云先生'
    }
}
const test = new TestStore() 
export default test