import { Component, memo } from "react";

type PropsType = {
  adjective: string;
};

// function Adjective(props: PropsType){

const Adjective = (props: PropsType) => {
  return <div>{props.adjective}</div>;
};

const MemoAdjectiveComp = memo(Adjective);
// сравнивает пропсы если пришли те же не делает ререндер

// export default Adjective;
export default MemoAdjectiveComp;
