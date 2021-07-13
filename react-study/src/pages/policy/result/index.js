import React, { Component } from 'react'

// 用于祖孙组件传值
const childContext = React.createContext()
const { Provider } = childContext
export class Result extends Component {
    state = {
        name: "result"
    }

    render() {
        return (
            <div style={{ height: 150 + 'px', background: 'red' }}>
                我是result
                <Provider value={this.state.name}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div style={{ height: 100 + 'px', background: 'pink' }}>
                我是B
                <C />
            </div>
        )
    }
}

class C extends Component {
    // 声明接收context
    static contextType = childContext
    render() {
        console.log(this.context,"输出context")
        return (
            <div style={{ height: 50 + 'px', background: 'lightblue' }}>
                我是C
            </div>
        )
    }
}

export default Result
