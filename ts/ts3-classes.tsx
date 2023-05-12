import React, { Component } from "react";

// Класс компонент это дженерик и принимает <Props, State>
class MyClassComp extends Component<{ prop1: number }, { state1: string }> {
  constructor(props: { prop1: number }) {
    super(props);
    this.state = {
      state1: "123123",
    };
  }

  public render() {
    return (
      <div>
        {this.props.prop1} --- {this.state.state1}
      </div>
    );
  }
}
