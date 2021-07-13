import React from 'react'
import ReactDOM from 'react-dom';
import { Button, Space, Input } from 'antd';

function Need() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('胡桃')
    const inputRef = React.useRef()

    function operate() {
        setCount(value => value + 1)
    }

    function changeName() {
        setName("甘雨")
    }

    function stop() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function showData(){
        console.log(inputRef.current.state.value)
    }

    React.useEffect(() => {
        let timer = setInterval(() => {
            // setCount(count => count + 1)
        }, 10000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div style={{ padding: 10 + 'px' }}>
            <Space direction="vertical">
                <Input ref={inputRef}></Input>
                <h1>总和：{count}</h1>
                <h1>姓名：{name}</h1>
                <Button type="primary" onClick={operate}>点我加1</Button>
                <Button type="primary" onClick={changeName}>点我改名</Button>
                <Button type="primary" onClick={stop}>点我卸载</Button>
                <Button type="primary" onClick={showData}>点我输出input值</Button>
            </Space>
        </div>
    )

}

export default Need

