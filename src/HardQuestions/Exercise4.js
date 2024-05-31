import React from 'react';
	
class Exercise4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Exercise4;