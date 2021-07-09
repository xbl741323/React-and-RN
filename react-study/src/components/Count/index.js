import React from 'react'
import '../../styles/service.css';
import { createAciton, createAsyncAciton } from '../../redux/actions/count'
import { connect } from 'react-redux'
import { Button, Select } from 'antd';
const { Option } = Select;

class CountContainer extends React.Component {

    state = {
        title: "service",
        cVal: 0,
        count: 0
    }

    handleChange = (val) => {
        this.setState({
            cVal: val
        })
    }

    operate = (type) => {
        const { cVal } = this.state
        this.props.createAciton(type, cVal)

    }
    operateAsync = (type) => {
        const { cVal } = this.state
        this.props.createAsyncAciton(type, cVal, 1000)
    }

    render() {
        console.log(this.props)
        return (
            <div className="service_count">
                <p>计算机案例：练习react-redux</p>
                <div>
                    <Select defaultValue="0" style={{ width: 200 }} onChange={(e) => this.handleChange(e)}>
                        <Option value="0">0</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                </div>
                <div>
                    <Button type="primary" onClick={(e) => this.operate(0, e)}>+</Button>
                    <Button type="primary" onClick={(e) => this.operate(1, e)}>-</Button>
                    <Button type="primary" onClick={(e) => this.operate(2, e)}>x</Button>
                    <Button type="primary" onClick={(e) => this.operate(3, e)}>/</Button>
                    <Button type="primary" onClick={(e) => this.operateAsync(0, e)}>异步+</Button>
                </div>
                <div>计算结果：{this.props.count}</div>
            </div>
        )
    }
}
export default connect(
    // 这里的 state.count 中的 count，对应的是redecers.js 中 function 的方法名
    // redux 会将所有的状态(reducer) 封装成一个对象，也就是我们所需要的对象了。其中函数名是键，state的值是值。
    state => ({ count: state.count }),
    {
        createAciton,
        createAsyncAciton
    }
)(CountContainer)
