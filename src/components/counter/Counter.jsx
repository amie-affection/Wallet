import React from "react";
import Wallet from "../../wallet/Wallet";

class Counter extends React.Component {
  state = {
    count: 0,
    isShow: false,
  };

  increment = () => {
    // console.log("plus");
    // console.log(this.state.count);
    this.setState((prev, p) => {
      //   console.log(prev);
      //   console.log(p);
      return { count: prev.count + p.step };
    });
  };

  terminal = () => {
    this.setState((prev) => ({ isShow: !prev.isShow }));
  };

  replenish = () => {
    this.props.replenishment(this.state.count);
    this.setState({ count: 0 });
  };

  render() {
    // console.log("render");
    // console.log(this.state);
    // console.log(this.props);

    const { count, isShow } = this.state;
    return (
      <>
        <button onClick={this.terminal}>
          {isShow ? "hide" : "show"} terminal
        </button>
        {isShow && (
          <>
            <button onClick={this.increment}>plus</button>
            <h2>COUNTER: {this.state.count}</h2>
            <button onClick={this.replenish}>replenish</button>
          </>
        )}
      </>
    );
  }
}

export default Counter;
