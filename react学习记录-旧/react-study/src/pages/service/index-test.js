import React from 'react'
import '../../styles/service.css';
import Head from '../../components/head'
import { Button, Select } from 'antd';
const { Option } = Select;

export class Service extends React.Component {

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
        const { cVal, count } = this.state
        switch (type) {
            case 0:
                this.setState({
                    count: count + Number(cVal)
                })
                break;
            case 1:
                this.setState({
                    count: count - Number(cVal)
                })
                break;
            case 2:
                this.setState({
                    count: count * Number(cVal)
                })
                break;
            case 3:
                this.setState({
                    count: count / Number(cVal)
                })
                break;
            default:
                break
        }
    }

    render() {
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
                        <Button type="primary" onClick={(e) => this.operate(0, e)}>+</Button>
                        <Button type="primary" onClick={(e) => this.operate(1, e)}>-</Button>
                        <Button type="primary" onClick={(e) => this.operate(2, e)}>x</Button>
                        <Button type="primary" onClick={(e) => this.operate(3, e)}>/</Button>
                    </div>
                    <div>计算结果：{this.state.count}</div>
                </div>
            </div>
        )
    }
}

export default Service
