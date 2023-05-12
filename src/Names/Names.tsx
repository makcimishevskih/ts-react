// PureComponent не будет ререндерить если не изменилось значение
// которое приходит в наш компонент при условии что объект 
// содержит несколько свойств которые сплитятся между компами
// React.memo - HOC делает тоже самое 

import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";

import { Component } from "react";
import Adjective from "./Adjective";
import Animal from "./Animal";

interface INames {
  adjective: string;
  animalWord: string;
}
interface IProps {}

interface ICustomWordConfig {
  dictionaries: string[] | number[];
  separator?: string;
  length?: number;
}

export default class Names extends Component<IProps, INames> {
  public timerId: null | ReturnType<typeof setTimeout>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      adjective: "",
      animalWord: "",
    };
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(() => ({
        adjective: this.generateWord(adjectives),
        animalWord: this.generateWord(animals),
      }));
    }, 3000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private generateWord(dict: string[]) {
    const customCharacterName: ICustomWordConfig = {
      dictionaries: [],
      length: 1,
    };

    const uniqueName: string = uniqueNamesGenerator({
      ...customCharacterName,
      ...{ dictionaries: [dict] },
    });

    return uniqueName;
  }

  public render() {
    return (
      <div>
        <Adjective adjective={this.state.adjective} />
        <Animal animal={this.state.animalWord} />
      </div>
    );
  }
}