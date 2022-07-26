import React from 'react';
import '../styles/item.css';
import { withRouter } from 'react-router-dom'

export class ItemComponent extends React.Component {

    toDetail = () => {
        this.props.history.push({
            pathname: "/policy-detail",
            state:{
                info:this.props.info
            }
        })
    }
    render() {
        const { info } = this.props //解构赋值
        return (
            <div className="item" onClick={(e) => this.toDetail(e)}>
                <div className="item_title">{info.title}
                    <img src="https://static.wotao.com/assets/mobile/img/icon_new@2x.038e477.png" alt=""></img>
                </div>
                <div className="item_time">{info.time}</div>
            </div>
        )
    }
}

export default withRouter(ItemComponent);
