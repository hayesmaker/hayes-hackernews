import React, { Component } from 'react';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      author: this.props.author,
      text: this.props.text
    }
  }

  render() {
    return(
      <div>
        {this.state.text}
        <p>
          by {this.state.author}
        </p>

      </div>
    )
  }

}

export default Story;