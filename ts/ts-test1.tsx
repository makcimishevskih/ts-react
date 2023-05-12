// 5

import React from "react";

interface IProps {
  firstProp: string;
}
type PropsType = {
  firstProp: string;
};
const props: TA = {
  href: "qweqew",
  ref: "qweqw",
};
const props1: TA1 = {};

const HTaskComp1: React.FC<PropsType> = ({ firstProp }) => {
  return <div>{firstProp}</div>;
};

export default HTaskComp1;

// 6

type TAEL = JSX.IntrinsicElements["a"];
type TDivEl = JSX.IntrinsicElements["div"];
type TAElAttrs<T> = {
  [K in keyof T]: T[K];
};
type TA = TAElAttrs<TAEL>;
type TA1 = TAElAttrs<TDivEl>;

type GetP<T extends keysEls> = {
  [N in keyof T]: T[N] extends T ? T[N] : null;
};

type keysEls = keyof JSX.IntrinsicElements;

type A = JSX.IntrinsicElements[];

type TTT<U extends keysEls > = {
  [K in keyof U]: U[K];
};

type TA = TAElAttrs<>;


// const a1: TA = {};

// const a2: getP = {};
