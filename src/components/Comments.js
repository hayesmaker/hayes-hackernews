import React, { Component } from 'react';
import {hackernews} from '../api';
import Comment from './Comment';


class TopStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: this.props.ids,
      comments: []
    }
  }

  componentDidMount() {

    hackernews.getComments(this.state.ids)
      .then((comments) => {
        console.log('comments', comments);
        this.setState({'comments': comments});
      });
  }

  render() {
    return(
      <ul>
        {
          this.state.comments.map((data, index) => (
            data.deleted ? <li>deleted</li> : <li><Comment author={data.by} text={data.text} id={data.id} key={index} /></li>
          ))
        }
      </ul>
    )
  }



}

export default TopStories;