import React, { Component } from 'react';
import { connect } from "react-redux";
import { API } from '../../api';

import NewsView from "./NewsView";

class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            News: {}
        };
    }

    componentDidMount() {
        this.getNews();
    }

    getNews() {
        API.GET(`/news`)
            .then(({ data }) => {
                if (data.ok) {
                    this.setState({ news: data.body, News: data.body[0] })
                }
            })
    }

    render() {
        let { news } = this.state;
        return (
            <NewsView
                news={news}
            />
        );
    }
}

const mapStateTopProps = (reducers) => {
    return reducers.usersReducer;
};

export default connect(mapStateTopProps, {})(NewsContainer);