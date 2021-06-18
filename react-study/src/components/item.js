import React from 'react';
import '../styles/item.css';

export class ItemComponent extends React.Component {
    render() {
        const { info } = this.props //解构赋值
        return (
            <div className="item">
                <div className="item_title">{info.title}
                    <img src="https://static.wotao.com/assets/mobile/img/icon_new@2x.038e477.png"></img>
                </div>
                <div className="item_time">{info.time}</div>
            </div>
        )
    }
}

ItemComponent.defaultProps = {
};

export default ItemComponent;
