import React from 'react';
import '../../styles/my.css';
import Head from '../../components/head'
import { showPerson } from '../../redux/actions/person'
import { connect } from 'react-redux'
import { Button, Input, Space } from 'antd';

class MyComponent extends React.Component {

    state = {
        title: "my",
        cName: ""
    }

    changeName = (val) => {
        console.log(val, "name")
        this.setState({
            cName: val.target.value
        })
    }

    operate = (type) => {
        const { cName } = this.state
        this.props.showPerson(type, {
            userName: cName
        })
    }

    render() {
        console.log(this.props, "my")
        return (
            <div className="my">
                <Head title={this.state.title} />
                <div className="my_contain">
                    <h3>count：{this.props.count}</h3>
                    <h3>姓名：{this.props.person.userName}</h3>
                    <Space direction="vertical">
                        <Input placeholder="请输入姓名" onChange={(e) => { this.changeName(e) }} />
                        <Button type="primary" onClick={(e) => this.operate(4, e)}>显示姓名</Button>
                    </Space>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        person: state.person,
        count: state.count
    }),
    {
        showPerson
    }
)(MyComponent)