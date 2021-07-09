import React from 'react'
import '../../styles/service.css';
// 引入store
import Head from '../../components/head'
import Count from '../../components/Count/index'
export class Service extends React.Component {

    state = {
        title: "service"
    }

    render() {
        return (
            <div className="service">
                <Head title={this.state.title} />
                <Count></Count>
            </div>
        )
    }
}

export default Service
