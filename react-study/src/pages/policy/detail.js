import React, { Component } from 'react'
import Head from '../../components/head'
import '../../styles/policy_detail.css'

export class detail extends Component {

    state = {
        title: "政策详情"
    }

    render() {
        const { info } = this.props.location.state
        return (
            <div className="policy_detail">
                <Head title={this.state.title} />
                <div className="policy_detail_content">{info.title}</div>
            </div>
        )
    }
}

export default detail
