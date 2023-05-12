//
// Generics --------------->
//
interface IMyArray<T> {
  [N: number]: T; // N ключ индекса типа number и ключ T
  map<U>(cb: (el: T, index?: number, array?: T[]) => U): U[];
  reduce<U>(cb: (acc: U, n: T) => U, initValue: U | 0): U;
}

const myArr1: Array<number> = [1, 2, 3];
const myArr2: IMyArray<number> = [1, 2, 3];

const myArr3 = myArr2.map<number>((el) => el + 1);
const myArr4 = myArr2.map<string>((el) => el + "");
// console.log(myArr4);
// console.log(myArr2.reduce<number>((acc, n) => acc + n, 0));

function identity<T>(arg: T): T {
  // Функция которая что принимает то возвращает
  return arg;
}
// Сам подставляет дженерик, не нужно писать самому
let result = identity("asd");

function getLen<T extends Array<any> | string>(arr: T): number {
  // Array<any> - важно если массив с разными типами значений
  return arr.length;
}
let len1 = getLen([1, 2, 3, "2", true]);
let len2 = getLen("qwe");
// console.log(len1, len2);

interface IValueWithType<T> {
  type: string; // string так как typeof в JS возвращает 'строку'
  value: T;
}

function withType<T>(arg: T): IValueWithType<T> {
  return {
    type: typeof arg,
    value: arg,
  };
}

let withres1 = withType(10);

//
// Встроенные generics ------------->
//

interface IExample1<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}

// Убирает ненужное
const ommittedObj1: Omit<IExample1<string>, "isEmpty"> = {
  type: "asdad",
  value: "adasd",
};

// Выбирает нужное
const pickedObj1: Pick<IExample1<string>, "type" | "value"> = {
  value: "daad",
  type: "asda",
};

// Делает все свойства необязательными
const partial: Partial<IExample1<object>> = {
  value: {
    sdad: "qweqe",
  },
};
