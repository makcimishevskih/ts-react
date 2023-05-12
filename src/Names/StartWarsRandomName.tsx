import { Component, useState } from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

interface Config {
  dictionaries: [string[]];
  length: number;
}

interface IState {
  name: string;
}

class StartWarsRandomName extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: this.getRandomName(),
    };
  }

  public getRandomName = () => {
    const defaultConfig: Config = {
      dictionaries: [starWars],
      length: 1,
    };

    const uniqueName = uniqueNamesGenerator(defaultConfig);
    return uniqueName;

    // return uniqueNamesGenerator({dictionaries:[starWars], length:1})
  };

  private handleClick = () => {
    this.setState(() => ({ name: this.getRandomName() }));
  };

  render() {
    const { name } = this.state;

    return (
      <section>
        <span>{name}</span>
        <div>{name}</div>
        <button onClick={this.handleClick}>Мне нужно имя!</button>
      </section>
    );
  }
}

export default StartWarsRandomName;

// const StartWarsRandomName = () => {
//   const [name, setName] = useState(getRandomName());

//   function getRandomName() {
//     const defaultConfig: Config = {
//       dictionaries: [starWars],
//       length: 1,
//     };

//     const uniqueName = uniqueNamesGenerator(defaultConfig);
//     return uniqueName;
//   }

//   const handleClick = () => {
//     setName(() => getRandomName());
//   };

//   return (
//     <section>
//       <span>{name}</span>
//       <div>{name}</div>
//       <button onClick={handleClick}>Мне нужно имя!</button>
//     </section>
//   );
// };

// export default StartWarsRandomName;
