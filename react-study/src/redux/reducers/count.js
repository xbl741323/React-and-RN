/*
  1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
  2.reducer函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)
*/

// combineReducers这个方法的作用就是用来整合所有的reducer
import {
  ZERO,
  ONE,
  TWO,
  THREE
} from '../constant'

const initState = 0 // 初始化状态
function count(preState = initState, action) {
  console.log(preState, action, "输出count函数中的preState,action")
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

export default count 
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

/*
D.求和案例_react-redux基本使用
   1.明确两个概念
     a.UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
     b.容器组件：负责和redux通信，将结果交给UI组件
   2.如何创建一个容器组件：靠react-redux的connect函数：
     connect(mapStateToProps,mapDispatchToProps)(UI组件)
     a.mapStateToProps：映射状态，返回值是一个对象
     b.mapDispatchToProps：映射操作状态的方法，返回值是一个对象
   3.备注1：容器组件中的store是靠props传进去的，而不是在容器中直接传入
   4.备注2：mapDispatchToProps可以是一个函数，也可以是一个对象
 */

   /*
D.求和案例_react-redux优化
   1.容器组件和UI组件整合成一个文件
   2.无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可
   3.使用了react-redux后也不用自己监测redux中状态的改变了，容器组件可以自动完成这个工作
   4.mapDispatchToProps也可以简单的写成一个对象
   5.一个组件要和redux打交道要经过几步？
     a.定义好UI组件---不暴露
     b.引入connect生成一个容器组件，并暴露，写法如下：
        export default connect(
            state => ({ key: value }), // 映射状态
            {
                xxxAciton  // 映射操作状态的方法
            }
        )(xxxContainer)
     c.在UI组件中通过this.props.xxx读取对应属性，通过this.props.xxxAciton操作对应方法
 */