/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-20 09:44:48
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-20 09:44:54
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {observer, inject} from 'mobx-react';

// 观察者
@inject('test') 
@observer
class DemoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { test } = this.props;
        return (
            <div>
                <p>{test.name}</p>
            </div>
        );
    }
}

export default DemoComponent;
