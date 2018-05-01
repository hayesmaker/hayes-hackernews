import React, {Component} from 'react';
import Comments from './Comments';
//import {hackernews} from '../api';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      commentIds: this.props.comments,
      renderComments: false,
      url: this.props.url
    }
  }

  onClick = () => {
    //console.log('show thesee comments', this.state.id, this.state.comments);
    this.setState({'renderComments': !this.state.renderComments});
  }

  render() {
    return (
      <article>
        <a href={this.state.url} target='_self'>Title: {this.state.title}</a>
        <br/>
        {this.state.commentIds && this.state.commentIds.length || 0} Comments
        {this.state.commentIds && <button onClick={this.onClick}> {this.state.renderComments ? 'Hide' : 'Show'}</button>}
        <div>
          {this.state.renderComments && <Comments ids={this.state.commentIds} />}
        </div>
      </article>
    )
  }

}

export default Story;