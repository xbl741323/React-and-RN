import { createAciton, createAsyncAciton } from '../../redux/count_action'
// 引入Count的UI组件
import CountUI from '../../components/Count/index'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state }),
    // mapDispatchToProps的简写，备注：这里的mapDispatchToProps可以传函数形式的也可以传对象形式的（此处是对象形式的）
    {
        createAciton,
        createAsyncAciton
    }
)(CountUI)
