import { Component } from "react";

// interface PropsType {
//   animal: string;
// }
type PropsType = {
  animal: string;
};

export default class Animal extends Component<PropsType> {
  render() {
    return <div>{this.props.animal}</div>;
  }
}
