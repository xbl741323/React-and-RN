import React, { Component } from 'react'
import Item from '../../../components/item'

export class Result extends Component {
    state = {
        list: [
            {
                title: '技术成果',
                time: '2021-06-17'
            },
            {
                title: '技术成果',
                time: '2020-03-16'
            },
            {
                title: '技术成果',
                time: '2021-12-23'
            },
            {
                title: '技术成果',
                time: '2021-06-17'
            },
            {
                title: '技术成果',
                time: '2020-03-16'
            },
            {
                title: '技术成果',
                time: '2021-12-23'
            },
            {
                title: '技术成果',
                time: '2020-03-16'
            },
            {
                title: '技术成果',
                time: '2020-03-16'
            },
            {
                title: '技术成果',
                time: '2020-03-16'
            },
            {
                title: '技术成果',
                time: '2020-03-16'
            },
        ]
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map((item, index) => {
                        return <Item info={item} key={index} />
                    })
                }
            </div>
        )
    }
}

export default Result
