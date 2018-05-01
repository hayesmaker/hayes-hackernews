import React, { Component } from 'react';
import {hackernews} from '../api';
import Story from './Story';


class TopStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultsLen: this.props.results,
      topStories: []
    }
  }

  componentDidMount() {
    hackernews.getTopStories(this.state.resultsLen)
      .then((stories) => {
        console.log('stories=', stories);
        this.setState({topStories: stories});
      });
  }

  render() {
    return(
      <div>
        <h1>Top Stories ({this.state.resultsLen})</h1>
        {
          this.state.topStories.map((data, index) => (
            <Story title={data.title} comments={data.kids} key={index} id={data.id} url={data.url} />
          ))
        }
      </div>
    )
  }
}

export default TopStories;