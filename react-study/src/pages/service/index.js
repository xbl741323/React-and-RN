import React from 'react'
import '../../styles/service.css';
import Head from '../../components/head'

export class Service extends React.Component {

    state = {
        title: "service"
    }

    render() {
        return (
            <div className="service">
                <Head title={this.state.title} />
            </div>
        )
    }
}

export default Service
