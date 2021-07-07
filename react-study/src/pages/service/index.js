import React from 'react'
// 引入store,用于获取redux中保存的状态
import store from '../../redux/store'
import '../../styles/service.css';
import Head from '../../components/head'
import { Button, Select } from 'antd';
import { createAciton, createAsyncAciton } from '../../redux/count_action'
const { Option } = Select;
// 引入actionCreator，专门用于创建action对象


export class Service extends React.Component {

    state = {
        title: "service",
        cVal: 0
    }

    componentDidMount() {
        // 检测redux中状态的变化，只要变化，就调用render
        store.subscribe(() => {
            this.setState({})
        })
    }

    handleChange = (val) => {
        this.setState({
            cVal: val
        })
    }

    operate = (type) => {
        const { cVal } = this.state
        store.dispatch(
            createAciton(type, Number(cVal))
        )
    }

    operateAsync = (type) => {
        const { cVal } = this.state
        store.dispatch(
            createAsyncAciton(type, Number(cVal), 1000)
        )
    }

    render() {
        console.log(store, "store")
        return (
            <div className="service">
                <Head title={this.state.title} />
                <div className="service_count">
                    <p>计算机案例：练习redux</p>
                    <div>
                        <Select defaultValue="0" style={{ width: 200 }} onChange={(e) => this.handleChange(e)}>
                            <Option value="0">0</Option>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </div>
                    <div>
                        <Button type="primary" onClick={(e) => this.operate('0', e)}>+</Button>
                        <Button type="primary" onClick={(e) => this.operate('1', e)}>-</Button>
                        <Button type="primary" onClick={(e) => this.operate('2', e)}>x</Button>
                        <Button type="primary" onClick={(e) => this.operate('3', e)}>/</Button>
                        <Button type="primary" onClick={(e) => this.operateAsync('0', e)}>异步+</Button>
                    </div>
                    <div>计算结果：{store.getState()}</div>
                </div>
            </div>
        )
    }
}

export default Service


