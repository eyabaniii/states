import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(this.updateElapsedTime, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateElapsedTime = () => {
    this.setState(prevState => ({
      elapsedTime: prevState.elapsedTime + 1,
    }));
  }

  render() {
    const { elapsedTime } = this.state;

    return (
      <div>
        <p>Time interval since last mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default Count;
