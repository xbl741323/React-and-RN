import React from 'react';
import '../../styles/my.css';
import Head from '../../components/head'

export class MyComponent extends React.Component {

    state = {
        title: "my"
    }

    render() {
        return (
            <div className="my">
                <Head title={this.state.title} />
            </div>
        )
    }
}

export default MyComponent;