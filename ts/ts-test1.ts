// 1
function concat(a: string, b: string): string {
  return a + b;
}
concat("Hello, ", "World");

// 2
interface ITask0 {
  howIDoIt: string;
  someArray: (string | number)[];
}
interface ITask1 extends ITask0 {
  withData: ITask0[];
}
const myTask1: ITask1 = {
  howIDoIt: "i do it well",
  someArray: ["string1", "string2", 42],
  withData: [
    {
      howIDoIt: "i do it well",
      someArray: ["string1", 23],
    },
  ],
};

// 3

interface MyArr<T> {
  [K: number]: T;
  reduce<U>(cb: (acc: U, n: T) => T, iv: U): T;
}

const a: MyArr<number> = [1, 2, 3];

const init = 0;
type InitType = typeof init;

console.log(a.reduce<InitType>((acc, n) => acc + n, init));

// 4
interface ITask2 {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  };
}

type IMyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? IMyPartial<T[N]> : T[N];
};

const homeTask: IMyPartial<ITask2> = {
  externalData: {
    value: "win",
  },
};
