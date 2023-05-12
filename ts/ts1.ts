// JS Types ---> typeof ---------------->
//
const str = "string"; // typeof str ---> 'string
const num = 2; // typeof num ---> 'number'
const nan = NaN; // typeof nan ---> 'number'
const obj = {}; // typeof obj ---> 'object'
const arr = []; // typeof arr ---> 'object'
const nulll = null; // typeof nulll ---> 'object'
const symbol = Symbol(); // typeof symbol ---> 'symbol'
const und = undefined; // typeof und ---> 'undefined'
const voidd = void 0; // typeof void ---> 'undefined'
const bool = true; // typeof bool ---> 'boolean'
const fn = () => {}; // typeof fn ---> 'function'

// let tsStr = "asd";

const a = [1, 2, 3];
function sumJS(arr: number[]) {
  return arr.reduce((acc, n) => acc + n);
}
sumJS(a);

//
// Union type ---------------------->
//
type strOrNum = string | number;
const strOrNumber1: strOrNum = "2";
const strOrNumber2: strOrNum = 2;

type AllJsSimpleTypes =
  | string
  | number
  | []
  | object
  | undefined
  | null
  | boolean
  | void
  | symbol;

//
// Array ---------------->
//
const tsArray1: number[] = [1, 2, 3];
const tsArray2: Array<number> = [1, 2, 3]; // Встроенный дженерик

const arrNumOrStr1: Array<number | string> = [1, 2, 3];
const arrNumOrStr2: Array<number | string> = ["1", "2", "3"];
const arrNumOrStr3: number[] | string[] = [1, 2, 3];
const arrNumOrStr4: (number | string)[] = ["1", "2", "3"];
//
// Tuple ------------>
//
const tuple1: [number, string] = [1, "2"];
const tuple2: [number, string, ...boolean[]] = [1, "2", true, false];

//
// Object лучше использовать interface ---------------->
//
interface IMyObj {
  readonly a: number; // Только чтение
  b: string;
  c?: string[]; // Необязательное свойство
}
type MyObjType = { a: number; c: string };

const o1: { a: number; b: string; c: string[] } = {
  a: 1,
  b: "str",
  c: ["1", "2", "3"],
};
const o2: IMyObj = { a: 1, b: "str", c: ["1", "2", "3"] };

if (o1.c) {
  // Если существует присваиваемы
  const o1c = o1.c;
}

//
const apiAnswer: IndexApiAnswer = { key: "asd", key2: "asd" }; // много ключей - тысячи

interface IndexApiAnswer {
  [N: string]: string; // Любой ключ типа string со свойством string
}
//
// Functions -------------------->
//
enum EnumMethods { // Перечисления можно значения, либо индексация
  Add,
  Substruct,
  del,
  umn,
}
// enum EnumMethods { // Перечисления
//   Add = "add",
//   Substruct = "substract",
//   del = "/",
//   umn = "*" }

// Передаем EnumMethods как тип
function calculate(method: EnumMethods, left: number, right: number): number {
  switch (method) {
    case EnumMethods.Add:
      return left + right;
    case EnumMethods.Substruct:
      return left - right;
    case EnumMethods.umn:
      return left * right;
    case EnumMethods.del:
      return left / right;
    default: // Обязательно указать иначе будет ошибка типа возврата значения
      return 0;
  }
}
calculate(EnumMethods.Substruct, 1, 3);

//
// Arrow Functions лучше использовать type aliases
//

type ArrowFnType = () => number;
interface IArroyFn {
  (a: number, b: string): number;
}
const arrowFn1: ArrowFnType = () => 2;
const arrowFn2: IArroyFn = (a: number, b: string) => 2;

arrowFn1();
arrowFn2(123, "asd");

// Странные типы
type StrangeTsTypes = any | unknown | never;

const some1: any = "12"; // Выключает типизацию позволяет использовать и методы и свойства которых нет

const some2: unknown = "2"; // Также как any, но не позволяет вызывать методы так как неясно что за тип переменной

if (typeof some2 === "string") {
  // делаем что-то
}

function f1(): never {
  throw new Error("Error");
  // Или
  // for (let i = 0; i < бесконечность; i++)
}
function f2(): void {} //ничего не возвращает undefined
