/*
  1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
  2.reducer函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)
*/
import {
    ZERO,
    ONE,
    TWO,
    THREE
} from './constant'

const initState = 0 // 初始化状态
export default function countReducer(preState = initState, action) {
    console.log(preState, action, "输出preState,action")
    // if (preState === undefined) preState = 0
    // 从action对象中获取:type、data
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        case ZERO: // 加
            return preState + data
        case ONE: // 减
            return preState - data
        case TWO: // 乘
            return preState * data
        case THREE: // 除
            return preState / data
        default:
            return preState
    }
}

/*
A.求和案例_redux精简版
  1.去除Count组件自身的状态
  2.src建立：
      -reduce
        -store.js
        -count_reducer.js
  3.store.js:
    a.引入redux中的createStore函数，创建一个store
    b.createStore调用时传入一个为其服务的reducer
    c.记得暴露store对象
  4.count_reducer.js:
    a.reducer的本质是一个函数，接收：preState,action,返回加工后的状态
    b.reducer有两个作用：1.初始化状态 2.加工状态
    c.reducer被第一次调用时，是store自动触发的，传递的preState是undefined
  5.在index.js中监测store中状态的改变，一旦改变重新渲染</App>（index.js中页面显示不出来）
    备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写
 */

/*
B.求和案例_redux完整版
  新增文件：
   1.count_action.js 专门用于创建action对象
   2.constant.js 放置由于编码疏忽写错的action中的type值
 */

/*
C.求和案例_redux异步action版
   1.明确：延迟的动作不想交给组件本身，想交给action
   2.何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回（非必须）
   3.具体编码：
     a.npm in redux-thunk，并配置在store中
     b.创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
     c.异步任务有结果后，分发一个同步的action去真正操作数据
   4.备注：异步action不是必须要写的，完全可以自己等待异步任务的结果，再去分发同步action
 */