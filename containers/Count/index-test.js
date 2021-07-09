import {
    ZERO,
    ONE,
    TWO,
    THREE
} from '../../redux/constant'
import { createAciton, createAsyncAciton } from '../../redux/count_action'
// 引入Count的UI组件
import CountUI from '../../components/Count/index'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

/*
  1.mapStateToProp函数返回的是一个对象
  2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
  3.mapStateToProp用于传递状态
*/

const mapStateToProps = (state) => {
    return { count: state }
}

/*
  1.mapDispatchToProps函数返回的是一个函数
  2.mapDispatchToProps用于传递操作状态的方法
*/

const mapDispatchToProps = (dispatch) => {
    return {
        add: (number) => {
            dispatch(createAciton(ZERO, Number(number)))
        },
        subtract: (number) => {
            dispatch(createAciton(ONE, Number(number)))
        },
        multiply: (number) => {
            dispatch(createAciton(TWO, Number(number)))
        },
        divide: (number) => {
            dispatch(createAciton(THREE, Number(number)))
        },
        asyncAdd: (number) => {
            dispatch(createAsyncAciton(ZERO, Number(number), 1000))
        }
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
