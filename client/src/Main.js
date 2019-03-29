import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          Lastname: { this.props.lastname }
        </div>
        <div>
          Age: { this.props.age }
        </div>
      </div>
    );
  }
}

export default Main;