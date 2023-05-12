// interface IData {
//   how: string;
//   sime: (number | string)[];
// }
// interface IMyHT extends IData {
//   data: [IData];
// }

// const MyHT: IMyHT = {
//   how: "qwe",
//   sime: ["12", "weq", 42],
//   data: [{ how: "qwe", sime: ["qew", "zxczcx"] }],};
// console.log(MyHT);

// interface Array<T> {
//   [N: number]: T;
//   reduce<U>(callback: (acc: U, n: T) => U, initValue: U | 0): U;}
// const a: Array<number> = [1, 2, 3, 4, 5];
// let init = 0;
// console.log(a.reduce<typeof init>((acc, n) => acc + n, init));

// interface IHT {
//   data: string;
//   numData: number;
//   date: Date;
//   extData: {
//     basis: number;
//     value: string;
//   };
// }
// const homeTask: MyPartial<IHT> = {
//   // extData: {
//   //   value: "win",
//   // },
// };
// type MyPartial<T> = {
//   [N in keyof T]?: T[N] extends typeof homeTask ? MyPartial<T[N]> : T[N];
// };

// function zip<T1, T2>(array1: T1[], array2: T2[]): [T1, T2] {
//   const length = Math.min(array1.length, array2.length);
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result.push(array1[i], array2[i]);}
//   return result;}

// type ConcatType = string;
// function concat(a: ConcatType, b: ConcatType): string {
//   return a + b;}
// interface IArr<T> {
//   [N: number]: T;
// concat(...args: Array<T[] | T>): T[];
// reduce<U>(callback: (acc: U, n: T) => any, initValue: U): U;
// filter(callback: (el: T, i: number) => boolean): T[] | [];
// map(callback: (el: T, i?: number) => T): T[];
// }
// const a: IArr<string> = ["1", "2", "3"];
// const b: IArr<string> = a.concat("qwe");
// const b: IArr<string> = a.concat(["qwe", "asd"]);
// const init = 0;
// const arr: IArr<number> = [1, 2, 3];
// arr.map((el) => {
//   return el;
// });
// arr.map((el) => {
//   if (typeof el === "number" && el % 2 === 0) return el + 1;
//   return el; });

// let c = arr.reduce<typeof init>((acc, n) => acc + n, init);
// let f = arr.filter((el, i) => el % 2 === 0);

// console.log(c, f);
// const init = 0;
// arr.reduce((acc, next) => acc + next, init);

// НЕПОМНЯШИЙ -------------------------
// const valueF = (x: number) => x;
// const myV = valueF(11);
// type TypeF<T> = T;
// const a: TypeF<number> = 10;
// interface IValue<T> {
//   value: T; }
// const x: IValue<number> = {
//   value: 13, };

// class Some1<T> {
//   collection: T[];
//   constructor(collection: T[]) {
//     this.collection = collection;
//   }
//   get(index: number) {
//     return this.collection[index];
//   }
// }
// const a1 = new Some1<number>([1, 2, 3]);
// console.log(a1.collection, a1.get(2));
// const a2 = new Some1<string>(["1", "2", "3"]);
// console.log(a2.collection, a2.get(2));

// function printSmth<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// printSmth<number>([1, 2, 3]);
// printSmth<string>(["1", "2", "3"]);

// function fillArray<T>(len: number, el: T) {
//   return new Array<T>(len).fill(el);
// }
// console.log(fillArray<number>(3, 123));
// console.log(fillArray<string>(10, "*"));

// interface IO {
//   name: string;
//   surname: string;
//   age: number;
// }
// const o: IO = {
//   name: "a",
//   surname: "b",
//   age: 123,
// };
// function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
// console.log(getProp(o, "name"));
